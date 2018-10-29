FROM swaggerapi/swagger-codegen-cli:latest

COPY ./generate-and-replace.sh /
RUN chmod +x /generate-and-replace.sh
ENTRYPOINT ["/generate-and-replace.sh"]