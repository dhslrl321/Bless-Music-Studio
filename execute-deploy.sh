#!/bin/bash

cd /home/ec2-user/docker-image
cp /home/ec2-user/deploy/Bless-Music-Studio/README.mdwn /home/ec2-user/docker-image
./deploy.sh > /dev/null 2> /dev/null < /dev/null &