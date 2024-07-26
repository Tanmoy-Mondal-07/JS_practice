// counter
let x=0

function incriment(){
    x++
    document.getElementById("count").innerText = x
}

let saved="last saved"
let y=":"
function save(){
y+=" - "+x
x=0
document.getElementById("count").innerText = x
document.getElementById("saved").textContent=(saved+y)
console.log(x)   
}



let username='per'
let massage='you have notification'
let no=5
console.log(username+",,,,,"+massage+"!!!! "+no)

// welc
let msg="welcome"
let wl= document.getElementById("welcome")
wl.innerText=(msg+" "+username)

wl.innerText=(wl.innerText+", hi")
wl.innerText+=(", hi")