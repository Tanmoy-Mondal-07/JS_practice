// const promiseone=new Promise((resolved,reject)=>{
//     setTimeout(function() {
//         console.log("async task is compelete");
//     },1000)
// })

// promiseone.then(function() {
//     console.log("promise consumed");
// })

// new Promise((resolve,reject){
//     setTimeout(()=>{
//         console.log("async task 2");
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log("async 2 resolved");
// })

// const promisetwo=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     let error=false
//     if(!error){
//         resolve({username:"clash",email:"clash@gmail.com"})
//     }else{
//         reject('error:something went wrong')
//     }
//     },1000)
// })
// promisetwo.then((user)=>{
//     console.log(user);
//     return user
// }).then((x)=>{
//     console.log(x.username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>console.log('the promise ie either resolved or rejected'))


// const promisethree=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     let error=true
//     if(!error){
//         resolve({username:"javascript",password:"12345"})
//     }else{
//         reject('error:js went wrong')
//     }
//     },1000)
// })

// async function consumethree() {
//     try{
//     const response= await promisethree
//     console.log(response);
//     }catch(error){
//         console.log(error)
//     }
// }
// consumethree()

async function getalluser() {
    try{
    const response=await fetch("https://api.github.com/users/tanmoy-mondal-07")
    const data= await response.json
    console.log(data);
    }catch(error){
        console.log("e:",error);
    }
}
getalluser()

fetch("https://api.github.com/users/tanmoy-mondal-07")
.then((response)=>{
    return response.json()
}).then((x)=>{
    console.log(x);
}).catch((err)=>{
    console.log(err);
})