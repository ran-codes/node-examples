# Node - Modules

This core zettle will document common use cases for modules. The example code we write in this section can be found in the node_examples > 2-modules directory. 

>Module in Node. js is **a simple or complex functionality organized in single or multiple JavaScript files which can be reused throughout the Node.** **js application**. Each module in Node. js has its own context, so it cannot interfere with other modules or pollute global scope. ([1](https://www.tutorialsteacher.com/nodejs/nodejs-modules#:~:text=Module%20in%20Node.,modules%20or%20pollute%20global%20scope.))

In Node there are three common use cases ([2](https://www.w3schools.com/nodejs/nodejs_modules.asp)):
1. Built-in Modules 
2. Third-party modules
3. Create own modules

These revolve around two concepts
-  `require()`  function: imports modules
- `module.exports` directive: exports moduless.

## 1. Built-in Modules
Node.js has a set of [[Node - Built in Modules]] which you can use without any further installation. To  import these we can just use require and the module name. Below we utilize the `http` modules to run a local server at port 8080. The code is in `1-built-in-module.js`

``` node
// import module
const http = require('http');

// utilize module
http.createServer(function (req, res) {  
  res.writeHead(200, {'Content-Type': 'text/html'});  
  res.end('Hello World!');  
}).listen(8080);
```

Run this code and access server via browser at `http://localhost:8080/`

```shell
node .\2-modules\1-built-in-module.js
```

## 2. Third-party modules
To get started with third party modules we first need to install the module to our local project. 

``` shell
npm install @tidyjs/tidy
```

There are two ways we can load this module. If our index.js is not a module then we use `require()`. If we are importing into a module then we use the `import` directive; we will give go over this in the module creation example.

```node
// Import module as a whole
const tidyjs = require('@tidyjs/tidy')
const df = [{ name: 'frodo' }, { name: 'samwise' }];
const df_sleepy = tidyjs.tidy(df, tidyjs.mutate({ mood: '😪' }));
console.log(df_sleepy);

//  Import functions within a module
const { tidy, mutate } = require('@tidyjs/tidy');
const df_happy = tidy(df, mutate({ mood: '😀' }));
console.log(df_happy);
```

Run code with.

``` shell
node .\2-modules\1-built-in-module.js
```

## 3. Create own modules

It is useful to be able to seperate your application or codebase into several files. Node handles this with module imports and exports. We will create a folder called */js* at our working directory

### Module 1: single export
This is stored in /js/single.js

```node
module.exports = function makeCandy() {return `🍫`};
```

### Module 2: multiple exports
This is stored in /js/multiple.js. Note that we export an object containing the functions or obejcts that we want exported.

```node
const makeFace = () => {return (`🙃`)}
const makeCake = () => {return `🍰`};

module.exports = {makeFace, makeCake}
```

### index.js
This code is stored in 3-create-own-modules.js.  Note when we import a module that has multiple exports we need to specify which attribute/export to use.

```node
// Module 1: single export
const makeCandy = require('./js/single');
console.log(`Module 1: ${makeCandy()}`);

// Module 2: multiple export
const library = require('./js/multiple');
console.log(`Module 2: ${library.makeCake()} + ${library.makeFace()}`);
```

Run code with.

``` shell
node .\2-modules\3-create-own-modules.js
```

___
# References
