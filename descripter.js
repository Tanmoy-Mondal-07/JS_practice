const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
const descripterx=Object.getOwnPropertyDescriptors(Math,"PI")
console.log(descripter);

console.log(Math.PI);
Math.PI=5
console.log(Math.PI);

const chai={
    Name:"ginger chai",
    price:250,
    isavailable:true
}

console.log(Object.getOwnPropertyDescriptor(chai,"Name"));

Object.defineProperty(chai,'Name',{
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,'Name'));

for(let [key,value] of Object.entries(chai)){
    if (typeof value !== 'function') {
        console.log(`${key}:${value}`);
    }
}

Object.values(chai).forEach((i)=>console.log(i))