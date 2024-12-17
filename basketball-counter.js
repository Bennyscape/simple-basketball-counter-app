score1 = document.getElementById("score1")
score2 = document.getElementById("score2")

let homeCount = 0
let guestCount = 0


function homePlus1(){
    homeCount += 1
    score1.textContent = homeCount
}
function homePlus2(){
    homeCount += 2
    score1.textContent = homeCount
}
function homePlus3(){
    homeCount += 3
    score1.textContent = homeCount
    
}
function guestPlus1(){
    guestCount += 1
    score2.textContent = guestCount
}
function guestPlus2(){
    guestCount += 2
    score2.textContent = guestCount
}
function guestPlus3(){
    guestCount += 3
    score2.textContent = guestCount
    
}

function newGame(){
    homeCount = 0
    guestCount = 0
    score1.textContent = homeCount
    score2.textContent = guestCount
}


