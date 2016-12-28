FROM debian:latest
MAINTAINER thibault.theologien@insa-rouen.fr
VOLUME /root/sources
VOLUME /root/scripts
WORKDIR /root
RUN apt-get update
RUN apt-get install texlive-full biber latexmk make rubber xsltproc texlive-lang-cyrillic dia curl nodejs npm -y
RUN npm install -g n
RUN npm install npm@latest -g
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN n stable
RUN npm install --global gulp-cli
CMD bash ./scripts/compile.sh
