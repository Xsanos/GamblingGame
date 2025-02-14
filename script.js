let userpick = "";
let computerpick = "";
let result = "";
let account = 0;
let wincount = 0;
let stake = 100;
const info = document.getElementById("InfoGame");
const info_result = document.getElementById("result");
const info_account = document.getElementById("account");
const info_wincount = document.getElementById("wincount");
const info_stake = document.getElementById("InfoStake");

info_result.innerHTML = "$$ BIG WIN $$"
info_wincount.innerHTML = wincount;
info_account.innerHTML = account;
info_stake.innerHTML = stake;

document.getElementById("Paper").addEventListener("click", ()=> userinput("Paper"));
document.getElementById("Rock").addEventListener("click", ()=> userinput("Rock"));
document.getElementById("Scissors").addEventListener("click", ()=> userinput("Scissors"));
document.getElementById("Submit").addEventListener("click", ()=> play());

document.getElementById("arrow-l").addEventListener("click", ()=>stakechange("down"));
document.getElementById("arrow-r").addEventListener("click", ()=>stakechange("up"));

function userinput(pick){
    userpick = pick;
    info.innerHTML = `You picked ${pick}`;
}
function stakechange(state){
    if (state == "up"){
        stake += 100;
    }
    else if (state == "down" && stake != 100){
        stake -= 100;
    }
    info_stake.innerHTML = stake;
    console.log(`Stake has been changed to ${stake}`)
}


function play(){
    let randompick = Math.floor(Math.random()*3);

    if (randompick == "0"){
        computerpick = "Paper";
    }
    else if (randompick == "1"){
        computerpick = "Rock";
    }
    else if (randompick == "2"){
        computerpick = "Scissors";
    }

    if (userpick){
        console.log("----START----");
        console.log(`You: ${userpick}`);
        console.log(`Computer: ${computerpick}`);
        info.innerHTML += `<br> Oponent picked ${computerpick}`;


        if (userpick == computerpick){
            result = "Tie!";
        }
        else if (userpick == "Paper" && computerpick == "Rock"|| 
            userpick == "Rock" && computerpick == "Scissors" ||
            userpick == "Scissors" && computerpick == "Paper"){
            result = "YOU WIN!";
            account += stake;
            wincount += 1;
            }
        else{
            result = "Try again";
            account -= 1*stake; // multiplier 
        }
        info_result.innerHTML = result;
        info_account.innerHTML = account;
        info_wincount.innerHTML = wincount;
        console.log(result);

         // Game reset
        userpick = ""; 
        computerpick = ""
        result = ""
    }
    else{
        info.innerHTML = "Choose your weapon!";
    }

}

