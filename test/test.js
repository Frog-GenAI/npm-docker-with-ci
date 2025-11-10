const http = require('http');

console.log('🧪 Running basic tests...');

// Simple test to verify the app can be required
try {
  const app = require('../src/index.js');
  console.log('✅ App module loads successfully');
  
  // Exit after a short delay to allow server to start
  setTimeout(() => {
    console.log('✅ All tests passed!');
    process.exit(0);
  }, 1000);
} catch (error) {
  console.error('❌ Test failed:', error.message);
  process.exit(1);
}

