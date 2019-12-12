# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /disorder

# add `/app/node_modules/.bin` to $PATH
ENV PATH /disorder/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /disorder/package.json
RUN npm install

# start app
CMD ["npm", "start"]