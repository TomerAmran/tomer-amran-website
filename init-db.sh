#!/bin/bash
docker run -p 33060:33060 -p 3306:3306 -e MYSQL_ALLOW_EMPTY_PASSWORD=true mysql&
