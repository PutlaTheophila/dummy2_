const path = require('path');

const filepath = path.join('content','subfolder' ,'file.txt');
console.log(filepath);

console.log(path.sep);

const absolutepath = path.join(__dirname , 'content' ,'subfolder' ,'file.txt');
console.log(absolutepath);