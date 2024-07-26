// arr
let arr=['a','b','c','d','e']
console.log(typeof(arr))   // see data type

console.log(arr.includes("c"));
console.log(arr.indexOf("c"));

const arr1=arr.slice(0,3) // only copy the part in a new arr
//const arr2= arr.splice(1,3)  // take the part and also remove it from old arr **********

console.log([...arr, ...arr1]); // *sprade oprator also can use *concat for *joining *********

const newarr=arr.join() //turn into string

// for (let i of arr)  =  for i in arr(python)
arr.forEach((i)=>console.log(i)) //for i in arr(python) with a arrow(=>) function

arr.push("element")
arr.pop() // remove last 
arr.shift() // remove first
arr.unshift("x")// add at first
let arrfiltered=arr.filter(i=> i==='c') //filter arr
console.log(arrfiltered)
console.log(arr[0])
console.log(arr.length)

const comparr=[1,2,3,4,[1,2,3,4[1,2,5]]] // arr inside arr inside arr
const xcomparr = comparr.flat(Infinity) // also can use 1,2,3 instade of infinity
console.log(xcomparr); // only arr

let a=1
let b=2
let c=3
console.log(Array.of(a,b,c));

//arr to string
let str = arr.toString()
console.log(str)

// String
// remove all "," with " "
str = str.split(",").join("-")
console.log(str)
str = str.replace(/-/g," ")
console.log(str)

const massage=' this is my first massage '
console.log(typeof(massage))

console.log(massage.indexOf('my'))  //find a latter or word index

console.log(massage.substring(0,5))
console.log(massage.slice(-8,4))

console.log(massage[1])
console.log(massage.includes("my"))
console.log(massage.startsWith("this"))
console.log(massage.endsWith('e'))
console.log(massage.length)
console.log(massage.replace('my','your')) //replace*****
console.log(massage.toUpperCase()) //uppercase
console.log(massage.trim()) // remove unwanted space " "
console.log(massage.trimRight()) // ||
console.log(massage.split(' ')) // turn into arr by defined paramiter || here space || split*