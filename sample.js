const os = require('os');
console.log(os.userInfo());

const path = require('path');
const filePath = path.join('/content/','subfolder','file.txt');
console.log(filePath);

const absolutePath = path.resolve(__dirname, 'content','subfolder','file.txt');
console.log(absolutePath);
// console.log(__dirname);
let baseFile = path.basename(filePath);
console.log(baseFile);

console.log(__dirname);