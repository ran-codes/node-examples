# Node - Zipped Files
[`JSZip`](https://www.npmjs.com/package/jszip) is a library for creating, reading and editing .zip files with JavaScript, with a lovely and simple API. We will create example project based on the [JSZip documentation](https://stuk.github.io/jszip/documentation/examples.html) ; all code can be found at *node_examples/6-zip/index.js*. 

#### JSZip instance
Our first step is always to create an instance of JSZip:

```node
var JSZip = require('jszip');
var zip = new JSZip();
```

There are several methods we can use to manipulation our `zip` instance.


#### Creating a file
`.file(name,content)` creates a file (content) at the specified directory (name). If a folder in the name does not exist this method can create that folder.

```node
// create a file
zip.file("hello.txt", "Hello[p my)6cxsw2q");
// oops, cat on keyboard. Fixing !
zip.file("hello.txt", "Hello World\n");
// create a file and a folder
zip.file("nested/hello.txt", "Hello World\n");
```

#### Creating a folder
`.folder(name)` will create a folder at the directory (name). Note that with `.folder(name)`,  returned object has a different root : if you add files on this object, you will put them in the created subfolder. This is just a view, the added files will also be in the “root” object.

```node
// same as
zip.folder("nested").file("hello.txt", "Hello World\n");

// create a file and a folder
zip.file("nested/hello.txt", "Hello World\n");
```

#### Accessing file content
You can access the file content with `.file(name)` and [its getters](https://stuk.github.io/jszip/documentation/api_zipobject.html) :

```node
zip.file("hello.txt").async("string").then(function (data) {
  // data is "Hello World\n"
});

if (JSZip.support.uint8array) {
  zip.file("hello.txt").async("uint8array").then(function (data) {
    // data is Uint8Array { 0=72, 1=101, 2=108, more...}
  });
}
```


#### Remove files and folders
You can also remove files or folders with `.remove(name)` :

``` node
zip.remove("photos/README");
zip.remove("photos");
// same as
zip.remove("photos"); // by removing the folder, you also remove its content.
```


#### Generate a zip file (in memory)
With `.generateAsync(options)` or `.generateNodeStream(options)` you can generate a zip file (not a real file but its representation in memory). Check [this page](https://stuk.github.io/jszip/documentation/howto/write_zip.html) for more information on how to write / give the file to the user.

```node
var promise = null;
if (JSZip.support.uint8array) {
  promise = zip.generateAsync({type : "uint8array"});
} else {
  promise = zip.generateAsync({type : "string"});
}
```

#### Write Zip
In Node, JSZip can generate [[Node - Buffers]] so you could do the [following](https://stuk.github.io/jszip/documentation/howto/write_zip.html):

```node
var fs = require("fs");
var JSZip = require("jszip");

var zip = new JSZip();
// zip.file("file", content);
// ... and other manipulations

zip
.generateNodeStream({type:'nodebuffer',streamFiles:true})
.pipe(fs.createWriteStream('out.zip'))
.on('finish', function () {
    // JSZip generates a readable stream with a "end" event,
    // but is piped here in a writable stream which emits a "finish" event.
    console.log("out.zip written.");
});
```

After we write the zip file we can upload it via [[Azure Functions - Blob Storage SDK]]; see the section about [`uploadFile()`](https://docs.microsoft.com/en-us/javascript/api/@azure/storage-blob/blockblobclient?view=azure-node-latest#@azure-storage-blob-blockblobclient-uploadfile)

We can implemente this stream within async/await by putting it within a promise that we await for it be resolved.

```node
  await new Promise((resolve, reject) => {
    zip
      .generateNodeStream({ type: 'nodebuffer', streamFiles: true })
      .pipe(fs.createWriteStream(tmpFile))
      .on('finish', function () {
        context.log('out.zip written to ' + tmpFile);
        resolve('done!');
      });
  });
```


___
# References
