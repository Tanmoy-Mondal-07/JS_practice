
const mysym=Symbol('key1') // symbol

//we can do obj inside obj inside obj
//empty obja
const emptyobja={}
if(Object.keys(emptyobja).length === 0){
    console.log("object is empty");
}

const jsuser={
    name:'clash',
    age: 18,
    [mysym]:'mykeys',
    location:{
        past:"jtvtyc",
        new:"jgffxcrch"
    },
    email:'iytciiy@gmail',
    islogedin: false,
    lastlogedin:['mon','sat'],
}
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser[mysym]);

console.log(jsuser.location?.new); // we can use "?" tomake sure it exist

jsuser.name='rider'
console.log(jsuser.name);

//Object.freeze(jsuser) u cant make changes in the obj anymore

jsuser.greeting= function(){
    return (`hello js user ${this.name}`)
}
console.log(jsuser.greeting());

const xuser=new Object()
xuser.id='ictyjt'
xuser.namex='fcfhh'
xuser.islogedinx= false
console.log(xuser);

//join obj
const bothuser=Object.assign({},jsuser,xuser) // dont do this
console.log(bothuser);
// do this
const superuser={...jsuser,...xuser}
console.log(superuser);

// we can use object inside arr like x=[{a:1}{b:2}] and use them like x[0].a

console.log(Object.keys(jsuser)); // get all the ley in arr
console.log(Object.values(jsuser));
console.log(Object.entries(jsuser))

console.log(jsuser.hasOwnProperty('name'));

const {namex}=xuser 
console.log(namex);

const {namex:mrx}=xuser 
console.log(mrx);