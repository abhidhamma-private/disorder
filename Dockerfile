FROM nginx:1.14.2-alpine

VOLUME /var/www

COPY ./build /var/www/disorder.abhidhamma.com
COPY ./nginx.conf /etc/nginx/conf.d/abhidhamma.disorder.com.conf

COPY data/docker/start.sh /usr/local/bin/
RUN ln -s usr/local/bin/start.sh /start.sh

EXPOSE 80

CMD ["nginx", "-g", "daemon off;","start.sh"]