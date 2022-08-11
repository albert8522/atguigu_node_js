var fs= require("fs");

// fs.open("hello2.txt","w");
var f;
var fd= fs.open("hello2.txt","w",function(err,fd){
    // console.log(arguments);
    console.log("回调函数");

    if(!err){
        // console.log(fd);
       
        console.log("写入成功");
    } else{
        console.log(err);
    }
});

// console.log("open 下的代码");

fs.close(fd ,function(){


    if(!error){
        console.log("文件已关闭")
    }
});