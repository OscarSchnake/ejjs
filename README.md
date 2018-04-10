Aplicacion de ejemplo para uso de Jenkins en Javascript Backend

tutorial usado
https://medium.com/wearetheledger/jenkins-your-butler-for-continuous-integration-blue-ocean-docker-image-solution-to-node-not-ebf9ebfbfa78

comando para instalar
     docker pull jenkinsci/blueocean
     docker run -p 8080:8080 jenkinsci/blueocean

     abrir http://localhost:8080

comando para invocar una vez instalado:
docker run --rm -u root -p8080:8080 -v jenkins-data:/var/jenkins_home -v /var/run/docker.sock:/var/runer/docker.sock -v "$HOME":/home jenkinsci/blueocean


Comando para tener un terminal en el contenedor

docker exec -it CONTAINER_ID /bin/bash

container es el nombre (se obtiene con docker container list) por ej wizardly_fermi
tambien se obtiene con docker ps

Instalar o verficar que esten instalados
    Github / Bitbucket plugin
    NodeJS Plugin

Instalar NodeJS desde ndejs.org
