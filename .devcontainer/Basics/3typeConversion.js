//1
let score = "33"
console.log(typeof(score))

let scoreInNumber = Number(score)
console.log(typeof(scoreInNumber))

//2
let value = "33abc"
let valueNum = Number(value)
console.log(typeof(valueNum));
console.log(valueNum); //Nan  is a special type explorex1 it


//3
let num = null
let num1 = Number(num)
console.log(num1); //0  

//4
let num3 = undefined
let num4 = Number(num3)
console.log(num4); //Nan

//5
let num5 = true
let num6 = Number(num5)
console.log(num6); //1 for false 0