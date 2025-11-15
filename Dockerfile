# Stage 1: build the React app
FROM node:20-alpine AS build

# set working directory
WORKDIR /app

# Install dependencies based on package-lock (fast, reproducible)
# copy only package files first to leverage Docker cache
COPY package.json package-lock.json ./

# Use npm ci for reproducible installs. If you don't commit package-lock.json,
# change this to `npm install`.
RUN npm ci --silent

# Copy the rest of the app sources
COPY . .


EXPOSE 3000

CMD ["npm", "start"]