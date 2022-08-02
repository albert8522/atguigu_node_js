// module.exports.name="孙悟空";
// module.exports.age=18;
// module.exports.sayName=function(){
//     console.log("我是孙悟空");
// }

// module.exports ={
//     name:"猪八戒",
//     age:28,
//     sayName:function(){
//         console.log("我是猪八戒");
//     }
// }

// var obj={};

// obj.a={};

// var a =obj.a;

// console.log(a== obj.a);

// a.name="孙悟空";

// a = new Object();

// console.log(obj.a.name);

// console.log(a.name);

// var a=10;
// var b=a;
// a++;

// console.log("a="+a);
// console.log("b="+b);

var obj = new Object();
obj.name="孙悟空";
var obj2 = obj;

console.log("obj"+obj.name);
console.log("obj2"+obj2.name);