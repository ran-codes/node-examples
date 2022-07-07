# Node - Files + Directories

One of major benefits of Node.js as compared to a JS engine is that it allows us to work with local directories and  file manipulation; the   `fs` module ([1](https://nodejs.dev/learn/the-nodejs-fs-module))is a built-in node module that supplies this core funcitonality. This zettle will document common use cases of this module. All code will be stored in *examples_node > 3-files-directories > index.js*.

```node
// Import module
const fs = require('fs')
```

## Files

### Read a File  

We can read a file synchonously with `readFileSync()`. It has two arguments the file location  relative to file where the funciton is callced. The second arguemnt is the 'character encoding' since we are dealing with bindary data (as are all stored files); the character encoding determines what the 0's and 1's in binary means. 
``` javascript
const readMe = fs.readFileSync('readMe.txt','utf8');
console.log(readMe);
```

### Write a file
We just `writeFileSync()` with two arguements: 1) output file 2) data to write

``` javascript
fs.writeFileSync('writeMe.txt', readMe,)
```

### Async versions

There are async versions which are `readFile()` and `writeFile()`.

### Removing Files
We can use `fs.unlink()`
```node
var fs = require('fs');

fs.unlink('writeMe.txt')
```

##  Creating & Removing Directories

```node
// sync
fs.mkdirSync('stuff')
fs.rmdirSync('stuff')

// async
fs.mkdir('stuff', function(){
  // do something after its done.
})
fs.rmdir('stuff', function(){
  // do something after its done.
})
```

## path module
When working with directories some utilities can be found in the `path` module. Some common workflows are (details can be found  [2](https://nodejs.dev/learn/the-nodejs-path-module)).

```node
const path = require('path');

// path.basename()
require('path').basename('/test/something'); // something
require('path').basename('/test/something.txt'); // something.txt
require('path').basename('/test/something.txt', '.txt'); // something

// path.dirname()
require('path').dirname('/test/something'); // /test
require('path').dirname('/test/something/file.txt'); // /test/something

//path.extname()
require('path').extname('/test/something'); // ''
require('path').extname('/test/something/file.txt'); // '.txt'
```

## Temporary files

___
# References
1. https://nodejs.dev/learn/the-nodejs-fs-module
