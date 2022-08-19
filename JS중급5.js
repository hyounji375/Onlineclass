let num1 = 10;

num1.toString(2);
console.log(num1.toString(2)); //1010

let num2 = 255;
num2.toString(16);
console.log(num2.toString(16)); //ff

Math.PI;
console.log(Math.PI); //3.141592653589793

let ceil1 = 5.3;
let ceil2 = 5.8;
console.log(Math.ceil(ceil1)); //6
console.log(Math.ceil(ceil2)); //6
console.log(Math.floor(ceil1)); //5
console.log(Math.floor(ceil2)); //5
console.log(Math.round(ceil1)); //5
console.log(Math.round(ceil2)); //6

let num3 = 12.3456;
console.log(num3.toFixed(3)); //12.346

console.log(parseInt("f3", 16));
