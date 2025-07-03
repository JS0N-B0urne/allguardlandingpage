require('dotenv').config();
const ftp = require('basic-ftp');
const fs = require('fs');
const path = require('path');

async function deploy() {
  const client = new ftp.Client();
  
  try {
    console.log('Starting deployment...');
    
    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASS,
      secure: process.env.FTP_SECURE === 'true'
    });
    
    console.log('Connected to FTP server');
    await client.uploadFromDir('./dist', '/public_html');
    console.log('Deployment completed successfully!');
    
  } catch (err) {
    console.error('Deployment failed:', err);
  }
  
  client.close();
}

deploy(); 