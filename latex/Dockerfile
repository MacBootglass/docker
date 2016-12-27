FROM debian:latest
MAINTAINER thibault.theologien@insa-rouen.fr
VOLUME /root/sources
VOLUME /root/scripts
WORKDIR /root
RUN apt-get update
RUN apt-get install texlive-full biber latexmk make rubber xsltproc texlive-lang-cyrillic dia -y
CMD bash ./scripts/compile.sh
