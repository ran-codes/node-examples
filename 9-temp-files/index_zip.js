// Import module
const fs = require('fs');
const os = require('os');
var JSZip = require('jszip');

// get random folder name

// get temp directory
const tempDir = os.tmpdir();
var randomFolderName =
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);
const tmpFolder = tempDir + '\\1111aaa_' + randomFolderName;
const outDir = tmpFolder + '\\out.zip';

// make tmpFolder
fs.mkdirSync(tmpFolder);

// Write Zipped file to tmpFolder
const data = 'data content';
const readMe = 'readMe content';
var zip = new JSZip();
zip.file('data.txt', data);
zip.file('readMe.txt', readMe);
zip
  .generateNodeStream({ type: 'nodebuffer', streamFiles: true })
  .pipe(fs.createWriteStream(outDir))
  .on('finish', function () {
    // JSZip generates a readable stream with a "end" event,
    // but is piped here in a writable stream which emits a "finish" event.
    console.log('out.zip written to ' + outDir);
  });
