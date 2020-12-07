#!/bin/bash

DOCKER_APP_NAME=bless-music-studio-server

EXIST_BLUE=$(docker-compose -p ${DOCKER_APP_NAME}-blue -f docker-compose.blue.yml ps | grep Up)

if [ -z "$EXIST_BLUE" ]; then
	echo "blue up now : "
	echo EXIST_BLUE
	docker-compose -p ${DOCKER_APP_NAME}-green -f docker-compose.green.yml down
	sleep 10
	docker-compose -p ${DOCKER_APP_NAME}-blue -f docker-compose.blue.yml up -d
	
else
	echo "green up now : "
	echo EXIST_BLUE
	
	docker-compose -p ${DOCKER_APP_NAME}-blue -f docker-compose.blue.yml down
	sleep 10
	docker-compose -p ${DOCKER_APP_NAME}-green -f docker-compose.green.yml up -d
	
fi