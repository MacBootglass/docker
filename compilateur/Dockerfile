FROM ruby:latest
MAINTAINER thibault.theologien@insa-rouen.fr
VOLUME /root
WORKDIR /root
RUN apt-get update && apt-get install nodejs npm -y && npm install -g n && npm install npm@latest -g && ln -s /usr/bin/nodejs /usr/bin/node && n stable && gem install sass && gem install sass-json-vars && npm install --global gulp-cli
CMD npm install && gulp && gulp watch
