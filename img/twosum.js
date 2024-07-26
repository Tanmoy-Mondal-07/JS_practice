let arr=[]
for (let i=0;i<100;i++){
    arr.push(i)
}
let sum =55

for (let i of arr){
    for (let j of arr){
        if (i+j===sum){
            console.log(i,j)
        }
    }
}