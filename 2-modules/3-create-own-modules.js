
// Module 1: single export
const makeCandy = require('./js/single');
console.log(`Module 1: ${makeCandy()}`);

// Module 2: multiple export
const library = require('./js/multiple');
console.log(`Module 2: ${library.makeCake()} + ${library.makeFace()}`);
