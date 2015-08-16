
var fs = require('fs');
var dir = '.';

if (process.argv[2]) {
    dir = process.argv[2];
}

var fileNames = fs.readdirSync(dir);

//console.log(fileNames);

for (var name in fileNames) {
  console.log(fileNames[name]);
}
