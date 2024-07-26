const arr=[1,2,3,4,5,6,7,8]

//filter
const nums = arr.filter((i) => i>4)
console.log(nums);

//map
const mapnum = arr.map((num) => num+10)
console.log(mapnum);

const numx = arr
    .map((i)=>i*10)
    .map((i)=>i+1)
    .filter((i)=> i>40)
console.log(numx);