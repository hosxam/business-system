const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\ASUS\\.openclaw\\workspace\\business-system';

const gaSnippet = `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>`;

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '_upload' || entry.name === '.git') continue;
      walkDir(fullPath);
    } else if (entry.name.endsWith('.html') && !entry.name.includes('najm-avatar')) {
      processFile(fullPath);
    }
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  if (content.includes('Google tag')) {
    console.log('SKIP (has GA): ' + path.relative(rootDir, filePath));
    return;
  }
  
  content = content.replace('<head>', '<head>\n' + gaSnippet + '\n');
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('OK: ' + path.relative(rootDir, filePath));
}

walkDir(rootDir);
console.log('DONE');
