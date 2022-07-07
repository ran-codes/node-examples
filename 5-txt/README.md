# Node - documentation files via txt
We are planning to use Node as a backend to generate analytical bundles. One key aspect is to generate some type of readme. Ther are several ways including generating a [docx](https://www.npmjs.com/package/docx) but for simplcity sake lets just generate a *.txt* file. All code is stored in *node_examples/5-txt/index.js*.


## .txt
This approach is pretty straight forward so joining an array of strings.

```node
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
  
// Write
const outPath = './5-txt/readMe.txt'
fs.writeFileSync(outPath, doc);
```



___
# References
