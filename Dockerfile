FROM adoptopenjdk/openjdk14
COPY ./build/libs/app.jar ./
ENTRYPOINT ["java"]
CMD ["-jar", "/app.jar"