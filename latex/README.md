## Container permettant de compiler des documents Latex

## Auteur: [Thibault THEOLOGIEN](https://github.com/MacBootglass)

* Avant d'utiliser ce container, merci d'exécuter la commande suivante: `mkdir sources`.

* Placer ensuite les documents à compiler dans le répertoire _latex/sources_ créé précédement.

* Vous pouvez modifier le fichier _latex/scripts/compile.sh_ afin de modifier les commandes executées au demarrage du container.

* Saisir la commande `docker-compose build` depuis le repertoire _latex_ afin de créer le container docker-compose.

* Saisir la commande `docker-compose up` depuis le repertoire _latex_ à chaque fois que vous voudrez executer le script _latex/scripts/startup.sh_
