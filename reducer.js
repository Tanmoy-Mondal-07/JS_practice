const arr=[1,2,3]

const x= arr.reduce((acc,currval)=>{
    console.log(`acc=${acc}+currval=${currval} = ${acc+currval},`);
    return (acc+currval)
},0)                                                // the return value becam "acc"
console.log(x);

const y= arr.reduce((i,x)=>(i+x),3)
console.log(y);