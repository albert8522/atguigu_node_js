
// var str="Hello atguigu";

// var buf =Buffer.from(str);
// console.log(buf);
// console.log(buf.length);
// console.log(str.length);

// var str="hello 尚硅谷";

// var buf = Buffer.from(str);

// console.log(str.length);
// console.log(buf.length);
// console.log(str.length);

// var buf2 = new  Buffer(10);
// console.log(buf2.length);

var buf2 =Buffer.alloc(10);
buf2[0]=88;
buf2[1]=255;
buf2[2]=0xaa;
buf2[10]=15;
buf2[3]=556;
// console.log(buf2[2].toString(2));

// for(var i=0;i<buf2.length;i++){
//     console.log(buf2[i]);
// }

var buf3 =Buffer.alloc(10);
console.log(buf3);

var buf4 = Buffer.from("我是一段数据");
console.log(buf4.toString());