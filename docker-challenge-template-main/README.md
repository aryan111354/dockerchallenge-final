# docker-challenge-template

# Challenge-1
Challenge 1 Report: Simple Web Server for Static Web Pages
Introduction
This project serves as an introduction to using Docker for deploying static web content. The task involves configuring NGINX within a Docker container to serve an index.html file. The primary goal is to learn Docker fundamentals, including image creation, running containers, and basic web serving with NGINX.

Goals
Understand basic Docker operations.
Build and run a Docker container.
Serve static content using NGINX.
Publish project files on GitHub.
Steps
1. Project Setup
Create a folder named challenge1 and a subfolder named public for static assets.
2. Add Web Content
Inside the public folder, place an index.html file containing your name and student ID.
3. Dockerfile Creation
Write a Dockerfile to configure NGINX to serve the content of the public folder. Here’s a basic example of what the Dockerfile might look like:

# Use the official NGINX image as a parent image
FROM nginx:alpine

# Copy the static content into place
COPY public /usr/share/nginx/html

# Expose port 80
EXPOSE 80
4. Build Docker Image
Build the Docker image with the following command:

docker build -t my-static-site .
5. Run Docker Container
Run the Docker container, mapping the appropriate ports:

docker run --name my-site -d -p 8080:80 my-static-site
6. GitHub Repository
Push the Dockerfile and the public folder to a new GitHub repository.
7. Documentation
Take a screenshot of the web server running and displaying the page.
8. Submission
Submit the URL of the GitHub repository and the screenshot on D2L.
Expected Outcome
Accessing http://localhost:8080/ in a web browser should display a homepage with your name and student ID.
Instructions for Building and Running the Container
To build the Docker image:

docker build -t my-static-site .
To run the container:

docker run --name my-site -d -p 8080:80 my-static-site
After running the container, open your web browser and navigate to http://localhost:8080 to view your static site.

Cited References
Docker Documentation, Docker Docs. [Online]. Available: https://docs.docker.com [Accessed: Apr 22, 2024].

# Challenge-2

Challenge 2 Report: Configuring a Node.js Application with Docker
Overview
The primary goal of this project is to configure and execute a dynamic Node.js application using Docker, showcasing the benefits of containerization for simple deployment and scalability. The architecture of the application utilizes Docker containers for both the Node.js server and NGINX, which acts as a reverse proxy.

Preparation Requirements
Tools Required:

Docker: Crucial for creating and managing containers.
Docker Compose: Used for defining and running multi-container Docker applications.
You can find installation instructions for both tools on their official website.

Detailed Implementation Steps
1. Environment Setup:
Begin by extracting the contents of challenge2.zip into the root folder of the project to establish your working environment.
2. Dockerfile Construction:
Node.js Application:
Create a Dockerfile within the Node.js application directory. This Dockerfile should:
Use the official Node.js image.
Set a working directory.
Copy application files.
Install dependencies.
Expose port 3000.
Define the command to start the server.
3. NGINX Configuration:
Prepare an nginx.conf file to configure NGINX to listen on port 80 and proxy requests to the Node.js application running on port 3000.
4. Compose File Configuration:
Create a docker-compose.yml file that defines the Node.js and NGINX services, specifying:
Build contexts.
Ports.
Dependencies.
5. Container Operations:
Execute docker-compose up --build to build and start the containers.
Check the containers' status with docker-compose ps.
6. Application Testing:
Open a browser and navigate to http://localhost:8080/api/books to see if the application returns the expected JSON output.
7. Troubleshooting:
If the expected results are not met, check the NGINX and Node.js logs for any errors and adjust the configurations as necessary.
Conclusion
This report thoroughly details the complete setup of a Node.js application with NGINX using Docker, from the initial setup to the final testing. This methodology ensures that the application is efficiently containerized, facilitating easier management and deployment.

Cited References
Docker Documentation, Docker Docs. [Online]. Available: https://docs.docker.com [Accessed: Apr 22, 2024].

# Challenge-3

Challenge 3 Report: Establishing a Full-Stack Application Using Docker
Overview
The primary aim of this project was to demonstrate the configuration of a full-stack application using Docker, which facilitates the streamlined deployment of isolated containers. This enhances management, deployment, and scalability. The application architecture included three main components: a Node.js backend, a MariaDB database, and an Nginx web server.

Preparation Requirements
Tools Required:

Docker and Docker Compose are essential for managing containerized applications. Installation guidelines can be found on their respective official websites.
Detailed Implementation Steps
1) Environment Setup:
Start by creating a .env file with essential environment variables like DB_USERNAME and DB_PASSWORD.
2) Dockerfile Construction:
Node.js Configuration: Set up the Dockerfile in the Node.js application directory with the necessary commands such as FROM, COPY, RUN, and CMD.
Database Setup: Establish the Dockerfile in the database directory to incorporate the init.sql file during the build phase.
Nginx Setup: Configure the Dockerfile for Nginx and elaborate on the setup of the nginx.conf file. Note: Adjust the COPY paths in the Dockerfiles to reflect the actual location relative to each Dockerfile's root directory.
3) Compose File Configuration:
Construct the docker-compose.yml, defining how each service interacts within the architecture. Include specifics on build context, ports, volumes, and service dependencies.
4) Container Operations:
Execute docker-compose up --build to build and start the containers.
Verify the operational status of the containers using docker-compose ps.
5) Application Testing:
Access the application via a web browser to ensure it functions correctly and as expected.
6) Troubleshooting:
Address common issues, such as path errors in Dockerfile COPY commands, and provide solutions to these challenges.

Conclusion
This report documents the process of setting up a full-stack application using Docker, emphasizing the configuration and interconnection of the individual components. This methodology ensures efficient management and scalability of the application.

Cited References
Docker Documentation, Docker Docs. [Online]. Available: https://docs.docker.com [Accessed: Apr 22, 2024].

# Challenge-4

Scaling a Node.js Application Using Docker Compose

Introduction

This guide focuses on scaling a Node.js application from a single instance to three using Docker Compose. This approach enhances the application's ability to handle increased traffic and ensures better availability.

Prerequisites

- Docker Installation: Ensure Docker is installed on your system. You can find installation instructions on [Docker's official website](https://docs.docker.com/get-docker/).
- Command-Line Proficiency: Basic familiarity with terminal or command prompt commands is required.
- Technical Understanding: Foundational knowledge of Node.js and Docker concepts will be beneficial for following this tutorial.

Setup Instructions

1. Environment Preparation

- Install Docker by following the instructions provided on Docker’s official website.
- Verify the installation by checking Docker's version with the following command in your command-line interface:

  docker --version


2. Docker Compose File Overview

Here's a brief overview of the services defined in the Docker Compose file:

- **nginx:** Acts as the reverse proxy for the Node.js application.
- **node-service:** The Node.js application that you will scale.
- **db:** The database service used by the application.

3. Modifying Docker Compose for Scaling

Open your Docker Compose file and modify the `node-service` section to enable scaling by specifying multiple instances (replicas) for the Node.js service.

4. Launching and Scaling the Application

Start and scale your services by executing the following command in your command-line interface:

docker-compose up --scale node-service=3


This command instructs Docker Compose to scale the Node.js service to three instances.

5. Output Documentation

Verify the scaling by observing if the responses come from different instances when accessing the application’s statistics page. You can view the list of running containers to ensure that three instances of the Node.js service are active. Record the output and responses from different instances as evidence of successful scaling.

References

- Docker, "Docker Documentation." Available online: [Docker Docs](https://docs.docker.com) [Accessed Apr 22, 2024].

