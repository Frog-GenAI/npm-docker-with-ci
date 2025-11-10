# npm-docker-with-ci

Simple Express.js API demonstrating npm package publishing and Docker image builds with GitHub Actions.

## 🎯 Purpose

This repository serves as an example for:
- Publishing npm packages to a registry
- Building and pushing Docker images
- Automating releases with GitHub Actions

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Run the application
npm start

# Run tests
npm test
```

The API will be available at `http://localhost:3000`

### Using Docker

```bash
# Build the image
docker build -t npm-docker-example .

# Run the container
docker run -p 3000:3000 npm-docker-example
```

## 📡 API Endpoints

- `GET /health` - Health check endpoint
- `GET /api/hello?name=YourName` - Hello endpoint with optional name parameter
- `GET /api/info` - Service information

## 🔄 GitHub Actions Workflows

This repository includes two workflows:

### 1. NPM Publish (`npm-publish.yml`)
- Triggers on push to `main` branch
- Runs tests
- Publishes package to npm registry

### 2. Docker Build & Push (`docker-publish.yml`)
- Triggers on push to `main` branch
- Builds Docker image
- Pushes to Docker Hub (or other registry)

## 📦 Package Information

- **Package Name:** `@frog-genai/npm-docker-example`
- **Registry:** npm (default)
- **Access:** Public

## 🐳 Docker Image

- **Base Image:** `node:18-alpine`
- **Exposed Port:** 3000
- **Health Check:** Included

## 🧪 Testing

Run the test suite:

```bash
npm test
```

## 📝 License

MIT

