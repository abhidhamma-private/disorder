/* eslint-disable */

console.log('나는서비스워커');

self.addEventListener('install', event => {
  console.log('SERVICEWORKER installed');
  console.log(event);
  // const offlinePage = new Request('/');
  // event.waitUntil(
  //   fetch(offlinePage).then(response => {
  //     return caches.open('disorder').then(cache => {
  //       return cache.put(offlinePage, response);
  //     });
  //   })
  // );
});

self.addEventListener('fetch', event => {
  // event.respondWith(
  //   fetch(event.request).catch(error => {
  //     return caches.open('disorder').then(cache => cache.match('/'));
  //   })
  // );
});

self.addEventListener('push', event => {
  console.log(event);
  var payload = event.data.json();
  const title = payload.title;
  const options = {
    body: payload.body,
    icon: './favicon.ico',
    data: payload.url,
    badge: './push-badge.png',
    tag: 'DISORDER',
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
  console.log('event : ', event);
  console.log('notification : ', event.notification);
  var questionUrl = event.notification.data;
  console.log(questionUrl);
  const url = questionUrl || 'https://abhidhamma.github.io/disorder/';
  event.notification.close();
  event.waitUntil(clients.openWindow(url));
});
