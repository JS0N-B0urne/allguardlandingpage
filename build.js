const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting production build...');

try {
  // Install dependencies
  console.log('📦 Installing dependencies...');
  execSync('npm ci --production=false', { stdio: 'inherit' });
  
  // Build main landing page first
  console.log('🔨 Building main landing page...');
  execSync('npm run build:main', { stdio: 'inherit' });
  
  // Copy build files to public_html
  console.log('📁 Copying files to public_html...');
  const publicHtmlPath = path.join(__dirname, '..', 'public_html');
  
  // Remove old public_html contents
  if (fs.existsSync(publicHtmlPath)) {
    execSync(`rm -rf ${publicHtmlPath}/*`, { stdio: 'inherit' });
  }
  
  // Copy main landing page to root
  const mainDistPath = path.join(__dirname, 'dist', 'main');
  if (fs.existsSync(mainDistPath)) {
    execSync(`cp -r ${mainDistPath}/* ${publicHtmlPath}/`, { stdio: 'inherit' });
  }
  
  // Define landing pages (you can add more as you create them)
  const landingPages = ['bed-bugs', 'cockroaches', 'rats', 'mice'];
  
  // Build and copy other landing pages (only if they exist)
  landingPages.forEach(page => {
    const pageSrcPath = path.join(__dirname, 'src', 'pages', `${page}.tsx`);
    
    // Only build if the page file exists
    if (fs.existsSync(pageSrcPath)) {
      console.log(`🔨 Building ${page} landing page...`);
      execSync(`npm run build:${page}`, { stdio: 'inherit' });
      
      const pageDistPath = path.join(__dirname, 'dist', page);
      const pageDeployPath = path.join(publicHtmlPath, page);
      
      if (fs.existsSync(pageDistPath)) {
        // Create subdirectory
        if (!fs.existsSync(pageDeployPath)) {
          fs.mkdirSync(pageDeployPath, { recursive: true });
        }
        
        // Copy files
        execSync(`cp -r ${pageDistPath}/* ${pageDeployPath}/`, { stdio: 'inherit' });
        console.log(`✅ ${page} landing page deployed`);
      }
    } else {
      console.log(`⏭️  Skipping ${page} - page file not found`);
    }
  });
  
  console.log('✅ Build completed successfully!');
  
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
} 