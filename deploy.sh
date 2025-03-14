#!/bin/bash -xe

echo $1
echo $2

apt-get update -y
npm install
npm install npm@latest -g

npm run build
aws s3 sync ./dist s3://$2/ --acl private