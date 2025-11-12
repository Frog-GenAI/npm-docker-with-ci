FROM yaronl55.jfrog.io/docker/node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Configure npm to use JFrog Fly registry
RUN npm config set registry https://yaronl55.jfrog.io/artifactory/api/npm/npm/

# Install dependencies
RUN npm ci --omit=dev

# Copy application code
COPY src/ ./src/

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start the application
CMD ["npm", "start"]

