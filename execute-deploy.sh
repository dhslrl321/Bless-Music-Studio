#!/bin/bash

cd /home/ec2-user/deploy/Bless-Music-Studio
cp -f /nginx.conf /etc/nginx
cp -f /docker-compose/docker-compose.blue.yml /home/ec2-user/docker-image
cp -f /docker-compose/docker-compose.green.yml /home/ec2-user/docker-image
cd -f /script
cp -f deploy.sh /home/ec2-user/docker-image
cp -f start-server.sh /home/ec2-user/docker-image

cd /home/ec2-user/docker-image
./deploy.sh > /dev/null 2> /dev/null < /dev/null &