# Use an official Python runtime as a parent image
FROM node:8

# Set the working directory to /app
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /app
COPY package*.json ./

# Install any needed packages specified in requirements.txt
RUN npm install

COPY . .

# Make port 80 available to the world outside this container
EXPOSE 7000

# Define environment variable
# ENV NAME World

# Run app.py when the container launches
CMD [ "npm", "run", "dev:start" ]

