const fs = require('fs');
var JSZip = require('jszip');

// Dummy data
const data = 'data content';
const readMe = 'readMe content';
const var1 = 'var1 content';

// Create a zip instance
var zip = new JSZip();

// Populate zip with data
zip.file('data.txt', data);
zip.file('readMe.txt', readMe);
zip.file('by_variables/var1.txt', var1);

// Write a zip file
zip
  .generateNodeStream({ type: 'nodebuffer', streamFiles: true })
  .pipe(fs.createWriteStream('./8-zip/data/out.zip'))
  .on('finish', function () {
    // JSZip generates a readable stream with a "end" event,
    // but is piped here in a writable stream which emits a "finish" event.
    console.log('out.zip written.');
  });
 


