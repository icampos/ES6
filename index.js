/*

LET Exercise

 - Let is similar to var, but only accesible to the block lever it is defined.
 - Let variables are not hosited.

*/ 

let a = 50;
let b = 100;
if (true) {
 let a = 60;
 var c = 10;
 console.log(a/c); // 6
 console.log(b/c); // 10
}
console.log(c); // 10
console.log(a); // 50


let a = 50;
let b = 100;
if (true) {
 let a = 60;
 let c = 10;
 console.log(a/c); // 6
 console.log(b/c); // 10
}
console.log(c); // Undefined
console.log(a); // 50