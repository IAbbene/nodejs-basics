var fs = require('fs');

var fileContentsAsync;
fs.readFile('./hello.js', 'utf8', function (err, data) {
  if (err) {
    console.log("Woops!", err);
  }
  fileContentsAsync = data;
  console.log("non-blocking call done");
});
console.log("code immediately after non-blocking call");

var fileContentsSync = fs.readFileSync('./hello.js', 'utf8');
console.log("blocking call done");

fs.writeFile('./testfile.txt', fileContentsSync, 'utf8', function (err) {
  console.log("Writing file finished");
});

fs.readdir('./lib', function (err, files) {
  if (err) {
    console.log("Error reading directory");
  }
  files.forEach(function (file) {
    console.log("File read by readdir():", file);
  });
});
