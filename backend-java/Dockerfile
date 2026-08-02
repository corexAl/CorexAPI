FROM eclipse-temurin:21


WORKDIR /app


COPY . .


RUN ./mvnw package -DskipTests


EXPOSE 8081


CMD [
    "java",
    "-jar",
    "target/corex-backend.jar"
]
