# Node - CSV files
Working with CSV files isn't as easy as in R. We document examples of common work flows for CSV. All code is stored in *node_examples/4-csv-files/index.js*; all dependencies are listed here:

```node
const fs = require('fs');
const { d3 } = require('d3-node');
const { tidy, mutate } = require('@tidyjs/tidy');
const ObjectsToCsv = require('objects-to-csv');
```

## Reading CSV
There are two steps to reading a CSV. First the actual file reading which is acomplished   locally `fs`  or `fetch` from the web. Then the parsing of the CSV string to a JS object. For performance sake, most of the examples do this via Node streams; for simplicity sake, we do this synchronously with [`d3.csvParse()`](https://github.com/d3/d3-dsv)

```node
const data_path = './4-csv-files/data/employees.csv';
const dataString = fs.readFileSync(data_path, 'utf8');
let data = d3.csvParse(dataString);
console.log(data);
```

## Writing CSV
We will use the [`objects-to-csv`](https://www.npmjs.com/package/objects-to-csv) package to do convert our object to CSV and then to write it. 

```node
const writeCsv = async () => {
  const csv = new ObjectsToCsv(data);
  await csv.toDisk(data_out);
  console.log(await csv.toString());
};

writeCsv();
```


___
# References
1. https://blog.logrocket.com/complete-guide-csv-files-node-js/
