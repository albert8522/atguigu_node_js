var  fs = require("fs");
const { isReadable } = require("stream");

fs.writeFile("hello3.txt","这是通过writeFile写入的内容",{flag:"a"},function(err){

    if(!err){
        console.log("写入成功");
    }
});