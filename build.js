const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting production build...');

try {
  // Install dependencies
  console.log('📦 Installing dependencies...');
  execSync('npm ci --production=false', { stdio: 'inherit' });
  
  // Build the project
  console.log('🔨 Building project...');
  execSync('npm run build:prod', { stdio: 'inherit' });
  
  // Copy build files to public_html
  console.log('📁 Copying files to public_html...');
  const distPath = path.join(__dirname, 'dist');
  const publicHtmlPath = path.join(__dirname, '..', 'public_html');
  
  // Remove old public_html contents
  if (fs.existsSync(publicHtmlPath)) {
    execSync(`rm -rf ${publicHtmlPath}/*`, { stdio: 'inherit' });
  }
  
  // Copy new build files
  execSync(`cp -r ${distPath}/* ${publicHtmlPath}/`, { stdio: 'inherit' });
  
  console.log('✅ Build completed successfully!');
  
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
} 