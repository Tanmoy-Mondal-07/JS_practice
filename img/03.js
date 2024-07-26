let firstcard = 5
let secondcard = 5

let sum = firstcard + secondcard
let hasblackjack = false
let isalive = false
let massage = ""

let msg = document.getElementById("massagedis")

function newcard(){
    firstcard += 8
    console.log(firstcard)
    sum = firstcard + secondcard
    start()
}

function start() {
console.log("working")
    if (sum < 21) {
        massage = ("do u want to draw a new card")
    } else if (sum === 21) {
        massage = ("black jack")
        hasblackjack = true
    } else if (sum > 21) {
        massage = ("you are out of the game")
        isalive = true
    }
msg.textContent=(massage)
let newbtn=document.getElementById("newbtn")
newbtn.disabled=isalive
newbtn.style.backgroundColor= "rgba(255, 255, 255, 0)";

}