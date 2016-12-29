## Container permettant de compiler des documents Latex

## Auteur: [Thibault THEOLOGIEN](https://github.com/MacBootglass)

* Avant d'utiliser ce container, merci d'exécuter la commande suivante: `mkdir sources` depuis le répertoire _latex_.

* Placer ensuite les documents à compiler dans le répertoire _latex/sources_ créé précédemment. Dans le cas actuel, c'est un projet personnel ayant l'arborescence _latex/sources/epiclearning/Qualite/PQ/_ qui est compilé.

* Vous pouvez modifier le fichier [latex/scripts/compile.sh](https://github.com/MacBootglass/docker/blob/master/latex/scripts/compile.sh) afin de modifier les commandes exécutées au démarrage du container.

* Vous pouvez modifier le fichier [latex/scripts/gulpfile.js](https://github.com/MacBootglass/docker/blob/master/latex/scripts/gulpfile.js) afin de modifier les répertoires contenant des fichiers LaTex surveillées (variable source).

* Saisir la commande `docker-compose build` depuis le répertoire _latex_ afin de créer le container docker-compose.

* Saisir la commande `docker-compose up` depuis le répertoire _latex_ afin d'exécuter le script _latex/scripts/startup.sh_.

* Par défaut, le fichier _latex/scripts/gulpfile_ est exécuté. Ce dernier surveille les modifications apportées à un projet LaTex non présent dans ce dépôt, et en exécute le makefile.
