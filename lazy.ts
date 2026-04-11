import fs from 'fs';

let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(/<img([^>]*)>/g, (match, p1) => {
  if (p1.includes('loading=')) return match;
  if (p1.includes('logo') || p1.includes('hero') || p1.includes('Capital Square Logo')) return match;
  return `<img loading="lazy"${p1}>`;
});

fs.writeFileSync('src/App.tsx', code);
console.log('Done lazy loading images');
