// Image optimization script for portfolio images
// This script provides guidance on optimizing images manually or using online tools

const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'images');

console.log('Image Optimization Report');
console.log('=========================\n');

// Get all image files
const imageFiles = fs.readdirSync(imagesDir).filter(file =>
  /\.(jpg|jpeg|png|gif)$/i.test(file)
);

console.log('Images to optimize:\n');

imageFiles.forEach(file => {
  const filePath = path.join(imagesDir, file);
  const stats = fs.statSync(filePath);
  const sizeInKB = (stats.size / 1024).toFixed(2);
  const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);

  let recommendation = '';
  if (stats.size > 500 * 1024) {
    recommendation = ' ⚠️ NEEDS OPTIMIZATION (Target: <100KB)';
  } else if (stats.size > 100 * 1024) {
    recommendation = ' ⚡ Should be optimized (Target: <100KB)';
  } else {
    recommendation = ' ✓ Good size';
  }

  if (sizeInMB > 1) {
    console.log(`${file}: ${sizeInMB} MB${recommendation}`);
  } else {
    console.log(`${file}: ${sizeInKB} KB${recommendation}`);
  }
});

console.log('\n=========================');
console.log('Optimization Recommendations:');
console.log('=========================\n');
console.log('1. For JPEG images:');
console.log('   - Use quality: 80-85%');
console.log('   - Maximum width: 1920px for backgrounds, 800px for photos');
console.log('   - Use progressive JPEG format\n');
console.log('2. For PNG images (certifications):');
console.log('   - Convert to JPEG if no transparency needed');
console.log('   - Or use pngquant/tinypng for compression');
console.log('   - Maximum width: 1200px\n');
console.log('3. Online tools (recommended):');
console.log('   - TinyPNG/TinyJPG: https://tinypng.com');
console.log('   - Squoosh: https://squoosh.app');
console.log('   - ImageOptim (Mac) or FileOptimizer (Windows)\n');
console.log('4. For next-gen formats:');
console.log('   - Consider WebP format for better compression');
console.log('   - Use <picture> element with fallbacks\n');
