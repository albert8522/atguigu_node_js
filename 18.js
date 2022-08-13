var fs = require("fs");

fs.readFile("C:/Users/X1/Desktop/IMG_20220402_222307.jpg",function(err,data){

    if(!err){
        fs.writeFile("C:/Users/X1/Desktop/shuang.jpg",data,function(err){

        });

        if(!err){
            // console.log(data.toString());
    
           
            console.log("写入成功");
        }

    }


   
});