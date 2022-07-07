# Node - Quick Start

This will quickly go over how to set up a local Node js project within VS code.

**Pre-reqs:**

- [ ] Install VS-code
- [ ] Install Node.js
- [ ] Instal ESLint extension
- [ ] Install npm Itellisense extension (optional)

## Hello World

The most basic thing is to initialize a proect, create a javascript file and be able to run it in VS code ([1](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial)).

1. We create a folder with our project name. For our examples project we call it '_node_examples_'.
2. Open that folder as a project with VS code
3. Create a file called app.js at the root directory. Fow now we just populate it with a single line of code `console.log('Hello World');`
4. To run `app.js` we just type into the terminal
   ```
   node app.js
   ```
![image](https://user-images.githubusercontent.com/45013044/177813785-452c26cd-22eb-45fd-a2ea-508703043e64.png)

## Running other scripts

In addition to app.js we could also create other scripts and run them via the node command in the terminal.

1. Create a folder called /examples
2. Create a JS script called index.js which has a single line `console.log('Hello World 2'
3. We can run this script by calling it relative to the project root directory

```
node .\examples\index.js
```

![image](https://user-images.githubusercontent.com/45013044/177813887-f6692918-c163-4bfb-92b9-a495e142ff74.png)
## Node modules

We can install project specific modules via `npm`. However note that Node comes with several [[Node - Built in Modules]] which provide many utliities without the need to install other modules.

---

# References

1. https://code.visualstudio.com/docs/nodejs/nodejs-tutorial
