var fs = require('fs');
var path = require ('path');

var dirpath = process.argv[2];
var ext = process.argv[3];
fs.readdir(dirpath, (err, files) => {
    for (let i = 0; i < files.length; i++) {
        if (path.extname(files[i]) === '.'+ext) {
            console.log(files[i]);
        }
        
    }
    
})