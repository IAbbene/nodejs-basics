console.log("Hello world");

// for (var i = 0; i < process.argv.length; i++) {
//   console.log(process.argv[i]);
// }

console.log(process.env.SOMEVAR);

console.log("__filename:", __filename);
console.log("__dirname:", __dirname);

var fs = require('fs');
// fs.readFile(...);

var circumference = require('./circumference');
console.log("circumference(3):", circumference(3));

var circle = require('./lib/circle');
console.log("circle.circumference(4):", circle.circumference(4));
console.log("circle.area(4):", circle.area(4));
