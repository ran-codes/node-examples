// Import module
const fs = require('fs');
const os = require('os');

// get temp directory
const tempDir = os.tmpdir();
const tmpFolder = tempDir + '\\1111111111111111aaaaaaaaaaaaaaaaaaaaaaa';

// make tmpFolder
fs.mkdirSync(tmpFolder);

// Write to tmpFolder
const content = 'Hello world';
const outPath = tmpFolder + '\\out.txt';
const res = fs.writeFileSync(outPath, content);

// Read from tmpFolder
const readMe = fs.readFileSync(outPath, 'utf8');
console.log(`temporary readMe: ${readMe}`);

// Delete temp.file
fs.rmdirSync(tmpFolder, {
  recursive: true,
});
