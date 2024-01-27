let homeh1EL=document.getElementById("homeh1")
let guesth1EL=document.getElementById("guesth1")
let popupEl=document.querySelector(".popup-box")
let overlayEl=document.querySelector(".overlay")
let count=0
function addOne() {
    count+=1;
    homeh1EL.textContent=count
}
function addTwo() {
    count+=2;
    homeh1EL.textContent=count
    
}
function addThree() {
    count+=3;
    homeh1EL.textContent=count
}

let count2=0
function addOneg() {
    count2+=1;
    guesth1EL.textContent=count2
}
function addTwog() {
    count2+=2;
    guesth1EL.textContent=count2
    
}
function addThreeg() {
    count2+=3;
    guesth1EL.textContent=count2
}


function reset(){
    count=0
    homeh1EL.textContent=count
    count2=0

    guesth1EL.textContent=count2
}

function popup(player){

    document.getElementById('popup'+player).style.display="block";
    overlayEl.style.display="block";
};


let cancelEl=document.getElementById("cancel-btn")
// let playerName=document.getElementById("player-name-input")
// let one=document.querySelector(".team1")
// let two=document.querySelector("team2")


function addPlayerToTeam(team){
    let playerNameInput = document.getElementById("player-name-input-"+team);
    let playerNameValue = playerNameInput.value;
    let newEl=document.createElement('p')
    newEl.innerHTML=`<h3>${playerNameValue}</h3>`
    document.getElementById(team).append(newEl);
    document.getElementById('popup'+team).style.display="none";
    overlayEl.style.display="none";
    playerNameInput.value = "";

}


function cancelTask(team) {
    document.getElementById('popup'+team).style.display="none";
    overlayEl.style.display="none";
    
}