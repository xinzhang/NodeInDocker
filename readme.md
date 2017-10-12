The basic 5 mins tutorial to get node run in express.

docker build -t xz/dockertest .
docker run -d -p 8626:8626 xz/dockertest

docker stop $(docker ps -a -q --filter ancestor=xz/dockertest)  
docker rm $(docker ps -a -q --filter status=exited)  
docker rmi xz/dockertest

docker exec -it cda1a  /bin/sh

