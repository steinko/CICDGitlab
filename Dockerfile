FROM adoptopenjdk/openjdk14
COPY ./app/build/libs/app.jar ./
ENTRYPOINT ["java"]
CMD ["-jar", "/app.jar"