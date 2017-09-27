#!/bin/bash

java -jar -Xmx2048m -XX:MaxPermSize=512m -Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5005 cq-quickstart-6.2.0.jar -nofork
