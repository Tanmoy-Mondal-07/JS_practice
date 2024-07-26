//for each
let arr=['a','b']

arr.forEach((i)=>console.log(i))
arr.forEach((item,index,arr) => {
    console.log(item,index,arr);
});
function printforeach(par) {
    console.log(par);   }//normal function
arr.forEach(printforeach)//call function

// for (let i of arr)  =  for i in arr(python)

// forloop
for (let i = 0; i <= 2; i++) {
    console.log(i); 
    //breake
    //continue   
}

//while loop
let index=0
while (index <=2) {
    console.log(index);
    index++
}
//do while
let x=3
do {
    console.log(`x=${x}`);      //first work then chk
    x++
} while (x<=2);

// array loop
