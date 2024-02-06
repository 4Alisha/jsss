let name="Alisha"
const university="CU"
var rollNum=2110990142
group=5
let khushii
console.table([name,university,rollNum,group,typeof(group),khushii])

"use strict" //treat all js code as newer version

//Data types
/*

1. number = range = 2^53
2. Bigint 
3. String
4. Boolean
5. Symbol
6. Null
7. Undefined



*/

console.table([typeof(Number),typeof(BigInt),typeof(String),typeof(Boolean),typeof(Symbol),typeof(null),typeof(undefined)])


//type conversion
let num=3456
num=String(num)
console.log(typeof num)

let n='33aa44bb' 
n=Number(n)
console.log(typeof n)
console.log(n)         // NaN not a number