var fs = require('fs');

var file = fs.readFileSync(process.argv[2]);
let lines = file.toString().split('\n').length -1;
console.log(lines);