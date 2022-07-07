# Node - Temporary Files
This zettle provides exmaples of ways which we can create/access temporary folders where we write files to. All code will be stored in *examples_node > 9-temp-files > index.js*.

## os
The [`os`](https://nodejs.dev/learn/the-nodejs-os-module) module provides many functions that you can use to retrieve information from the underlying operating system and the computer the program runs on, and interact with it. We can use [`os.tmpdir()`](https://nodejs.dev/learn/the-nodejs-os-module/#ostmpdir) to return the path to a assigned temp folder within the current operating system. This example will try to write some data to temp file.

```node
// Import module
const fs = require('fs');
const os = require('os');

// get temp directory
const tempDir = os.tmpdir();
const tmpFolder = tempDir + '\\aaaaaaaaaaaaaaaa';
  
// make tmpFolder
fs.mkdirSync(tmpFolder);
  
// Write to tmpFolder
const content = 'Hello world';
const outPath = tmpFolder + '\\out.txt';
fs.writeFileSync(outPath, content);

// Read from tmpFolder
const readMe = fs.readFileSync(outPath, 'utf8');
console.log(`temporary readMe: ${readMe}`);

// Delete temp.file
fs.rmdirSync(tmpFolder, {
  recursive: true,
});

```



___
# References
