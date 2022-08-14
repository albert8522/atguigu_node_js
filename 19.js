var fs = require("fs");

var rs= fs.createReadStream("C:/Users/X1/Desktop/a.mp3");

var ws = fs.createWriteStream("b.mp3");

rs.once("open",function(){
    console.log("可读流打开了~~~");
});

rs.once("close",function(){
    console.log("可读流关闭~~~");
    // ws.end();
});

rs.on("data",function(data){

   ws.write(data);
});

ws.once("open",function(){
    console.log("可写流打开了~~~");
});

ws.once("close",function(){
    console.log("可写流关闭了~~~");
});

rs.pipe(ws);


//p20