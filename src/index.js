const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    service: 'npm-docker-example'
  });
});

app.get('/api/hello', (req, res) => {
  const name = req.query.name || 'World';
  res.json({ 
    message: `Hello, ${name}!`,
    version: require('../package.json').version
  });
});

app.get('/api/info', (req, res) => {
  res.json({
    name: 'npm-docker-example',
    description: 'Simple Express.js API for testing npm and Docker publishing',
    version: require('../package.json').version,
    endpoints: [
      'GET /health',
      'GET /api/hello?name=YourName',
      'GET /api/info'
    ]
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📦 Version: ${require('../package.json').version}`);
});

module.exports = app;

