
FROM node:20.18-slim
# Installing libvips-dev for sharp Compatibility
RUN apt-get update
ENV NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY ./package.json ./yarn.lock ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN yarn global add node-gyp
RUN yarn cache clean && yarn config set network-timeout 600000 -g && yarn install
WORKDIR /opt/app
COPY ./ .
RUN chown -R node:node /opt/app
USER node
EXPOSE 1337
CMD ["yarn", "develop"]