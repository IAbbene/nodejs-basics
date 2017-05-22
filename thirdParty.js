var figlet = require('figlet');
var lodash = require("lodash");

var str = "Hello!";

figlet(str, function (err, data) {
  if (!err) {
    console.log(data);
  }
});

var array = [1, 2, 3];
console.log(lodash.without(array, 1));
