const fs = require('fs');

// Generate documentation
let header = `SALURBAL documentation for extract #2343214123`
let disclaimer = `DISCLAIMER: Use of this data is .... `
let citation = `CITATION: SALURBAL reference`
let intro = `This file contains the following files/folders:`;
let descByVar = ` - /by-variable = this folder contains the data for each selected variables.`;
let descData = ` - data_analytical.csv = a CSV table that contains all the selected variables merged together.`;
let descCodebook = ` - /codebook_analytical: a CSV table that contains all the metadata (definitions, sources, coding ... ETC) for the selected variables.`;
const doc = [
  header,
  disclaimer,
  citation,
  intro,
  descByVar,
  descData,
  descCodebook,
].join('\n\n');
console.log(doc)

// Write
const outPath = './5-txt/readMe.txt'
fs.writeFileSync(outPath, doc);