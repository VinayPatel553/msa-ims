# Stage 1: Build the application
FROM maven:3.9-eclipse-temurin-24 AS build
WORKDIR /app

# Copy pom.xml for dependency resolution
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy source code
COPY src ./src

# Build the application
RUN mvn clean package -DskipTests

# Stage 2: Run the application
FROM openjdk:26-ea-jdk-slim
WORKDIR /app

# Copy jar file from build stage
COPY --from=build /app/target/*.jar app.jar

# Expose service port
EXPOSE 8086

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
