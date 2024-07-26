//??????????????????????????????????????????????????????????????
const teaprice = 100
// condition ? true:false
teaprice >= 80 ? console.log("less then 80"):console.log("more then 80");

function massage(params) {
    if(!params){
        console.log('enter a user name');
        return
    }
    return `${params} just logged in`    
}
console.log(massage());

function price(...params) {      //take multiple input in one param
    return params
}
console.log(price(1,2,3,4,5));

const add=function (params) { //act like variable so als call after declaired unlike function that can be called any time
    return params+2
}
console.log(add(6));


//this dot

const user = {
    username:'clash',
    price: 25,

    welcomemsgg: function() {
        console.log(`${this.username},welcome to website`);
        // console.log(this);
    }
}
user.welcomemsgg()
user.username="rider"
user.welcomemsgg()

console.log(this);

function namex(params) {
    console.log(this);
}
// namex()

// arrow function
const a=()=>{
    let username = "abcd"
    console.log(this.username) // "this" dosent work inside any type of function
    console.log(username)
}
a()

const addtwo=(num1,num2)=>(num1+num2)//you dont hav to return if you dont use thard bracket"{}", it will auto return
//just keep it in one line
console.log(addtwo(5,5));

const nn=()=>({usernsme:"clash"})
console.log(nn());