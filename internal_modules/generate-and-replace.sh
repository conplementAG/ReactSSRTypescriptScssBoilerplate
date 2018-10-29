#!/bin/sh

set -eo pipefail

java -jar /opt/swagger-codegen-cli/swagger-codegen-cli.jar generate \
  -i https://petstore.swagger.io/v2/swagger.json \
  -l javascript \
  -o /internal_modules/petstore-bff-proxy \
  --additional-properties usePromises=true,useES6=false,projectName=petstore-bff-proxy