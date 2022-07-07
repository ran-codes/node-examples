# Node - Streams
Streams are one of the fundamental concepts that power Node.js applications.

They are a way to handle reading/writing files, network communications, or any kind of end-to-end information exchange in an efficient way.

Streams are not a concept unique to Node.js. They were introduced in the Unix operating system decades ago, and programs can interact with each other passing streams through the pipe operator (`|`).

For example, in the traditional way, when you tell the program to read a file, the file is read into memory, from start to finish, and then you process it.

Using streams you read it piece by piece, processing its content without keeping it all in memory.

The Node.js [`stream` module](https://nodejs.org/api/stream.html) provides the foundation upon which all streaming APIs are built. All streams are instances of [EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter)

## Why streams

Streams basically provide two major advantages over using other data handling methods:

-   **Memory efficiency**: you don't need to load large amounts of data in memory before you are able to process it
-   **Time efficiency**: it takes way less time to start processing data, since you can start processing as soon as you have it, rather than waiting till the whole data payload is available

## An example of a stream

A typical example is reading files from a disk.

Using the Node.js `fs` module, you can read a file, and serve it over HTTP when a new connection is established to your HTTP server:


```node
const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  fs.readFile(`${__dirname}/data.txt`, (err, data) => {
    res.end(data);
  });
});
server.listen(3000);
```
___
# References
- https://nodejs.dev/learn/nodejs-streams
