var fs = require("fs");
// console.log(fs);

var fd =fs.openSync("hello.txt","w");

fs.writeSync(fd,"今天的天气真的不错");
console.log(fd);
fs.closeSync(fd);
