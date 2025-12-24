const fs = require('fs');
const path = require('path');

const devlinkDir = path.join(__dirname, 'devlink');

function fixFiles(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      fixFiles(filePath);
    } else if (file.endsWith('.js') || file.endsWith('.tsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      // Replace the most common offending SVG properties
      content = content.replace(/fill-rule/g, 'fillRule')
                       .replace(/clip-rule/g, 'clipRule')
                       .replace(/stroke-width/g, 'strokeWidth');
      fs.writeFileSync(filePath, content);
    }
  });
}

fixFiles(devlinkDir);
console.log('✅ DevLink attributes fixed for React!');