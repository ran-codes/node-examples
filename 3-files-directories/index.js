// Import module
const fs = require('fs')

// Read a file
const hello = fs.readFileSync('./3-files-directories/files/hello.txt', 'utf8');
console.log(hello);

// Write a file
fs.writeFileSync('./3-files-directories/files/writeHello.txt', hello);

// Make directory
fs.mkdirSync('./3-files-directories/stuff');

// Remove directory
fs.rmdirSync('./3-files-directories/stuff');
