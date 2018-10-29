#!/bin/sh

set -eo pipefail

java -jar /opt/swagger-codegen-cli/swagger-codegen-cli.jar generate \
  -i https://petstore.swagger.io/v2/swagger.json \
  -l typescript-fetch \
  -o /internal_modules/petstore-bff-proxy
 
 # --additional-properties usePromises=true,useES6=false

# echo 'HACK : :) replacing the string replace from generated proxy'

# sedeasy () {
#   sed -i "s/$(echo $1 | sed -e 's/\([[\/.*]\|\]\)/\\&/g')/$(echo $2 | sed -e 's/[\/&]/\\&/g')/g" $3
# }

# sedeasy "str.replace(/T/i, ' ')" "str" /internal_modules/pex-bff-proxy/src/ApiClient.js
