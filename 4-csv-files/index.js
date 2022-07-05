const fs = require('fs');
const { d3 } = require('d3-node');
const { tidy, mutate } = require('@tidyjs/tidy');
const ObjectsToCsv = require('objects-to-csv');

// Import a CSV (synchronous)
const data_path = './4-csv-files/data/employees.csv';
const data_out = './4-csv-files/data/employees2.csv';
const dataString = fs.readFileSync(data_path, 'utf8');
let data = d3.csvParse(dataString);

// Test tidy.js
data = tidy(
  data,
  mutate({
    x: () => {
      return 999;
    },
  })
);
console.log(data);

// Write CSV
const writeCsv = async () => {
  const csv = new ObjectsToCsv(data);
  await csv.toDisk(data_out);
  console.log(await csv.toString());
};
writeCsv();
