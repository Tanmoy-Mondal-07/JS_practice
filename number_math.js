//number
const blance= 100

console.log(blance.toString().length); // for length
console.log(blance.toFixed(2)); // (0.00) 2 no after "." || *****

const x=125.5555555
const y=100000000000

console.log(x.toPrecision(3)); // finished in 3 no like 125.5=126

console.log(y.toLocaleString()); // 1,000,000 like that in us stander
console.log(y.toLocaleString('en-IN')); // 1,00,00,00 like that in indian stander

//math
console.log(Math);
console.log(Math.abs(-4)); // turn into +ev no
console.log(Math.round(5.3)); // round up no
console.log(Math.ceil(5.1)); //round up at highest - 6
console.log(Math.floor(5.9)); // round up loest - 5
console.log(Math.min(5,2,1,8)); // min max

//random
console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);
//random betwin 10-20
const min=10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min);