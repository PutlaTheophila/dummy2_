//setting up modules

const fs = require('fs');
const path = require('path');

//reading file system

const filepath = path.resolve( __dirname,'content','subfolder','test.txt');
const first = fs.readFileSync(filepath , 'utf8');
console.log(first);

// writing into file system

const filepath2 = path.resolve(__dirname,'content','subfolder' ,'test2.txt');
fs.writeFileSync(filepath2 , 'this is putla');
