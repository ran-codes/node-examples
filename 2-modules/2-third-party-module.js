// Import module as a whole
const tidyjs = require('@tidyjs/tidy')
const df = [{ name: 'frodo' }, { name: 'samwise' }];
const df_sleepy = tidyjs.tidy(df, tidyjs.mutate({ mood: '😪' }));
console.log(df_sleepy);

//  Import functions within a module
const { tidy, mutate } = require('@tidyjs/tidy');
const df_happy = tidy(df, mutate({ mood: '😀' }));
console.log(df_happy);
