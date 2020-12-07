#!/bin/bash

cd /home/ec2-user/deploy/Bless-Music-Studio
cp -f /nginx.conf /etc/nginx
cd ./docker
cp -f ./docker-compose.blue.yml /home/ec2-user/docker-image
cp -f ./docker-compose.green.yml /home/ec2-user/docker-image
cp -f ./Dockerfile /home/ec2-user/docker-image
cd /home/ec2-user/deploy/Bless-Music-Studio/script
cp -f ./deploy.sh /home/ec2-user/docker-image
cp -f ./start-server.sh /home/ec2-user/docker-image

cd /home/ec2-user/docker-image
sudo chmod +x ./deploy.sh
sudo chmod +x ./start-server.sh
./deploy.sh > /dev/null 2> /dev/null < /dev/null &