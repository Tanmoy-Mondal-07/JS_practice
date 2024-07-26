let mydate=new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

//custom date
let creatdate=new Date(2023,0,23,5,3) // months start from "0" to "11"in js
console.log(creatdate.toLocaleString());
console.log(creatdate.getMonth()+1);

let mytimestamp=Date.now() //***********************************
console.log(mytimestamp);

console.log(creatdate.getTime());

// ms to munite
console.log(Math.floor(Date.now()/1000));

