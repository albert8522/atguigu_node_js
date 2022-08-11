var  fs = require("fs");
var ws= fs.createWriteStream("hello4.txt");
ws.once("open",function(){
    console.log("流量打开");
});

ws.once("close",function(){
    console.log("流量结束了");
});
ws.write("通过可写流写入文件的内容");
ws.write("通过可写流写入文件的内容");
ws.write("通过可写流写入文件的内容");
ws.write("通过可写流写入文件的内容");
ws.write("通过可写流写入文件的内容");
ws.write("通过可写流写入文件的内容");

ws.write("通过可写流写入文件的内容");
ws.write("通过可写流写入文件的内容");
ws.close();