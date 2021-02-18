console.log("Ashish is great");

const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
//object type scoreboard
const scoreboard = {
    player: 0,
    computer: 0
}
//Play game
function play(e) {
    // console.log(e.target.id);
    restart.style.display = 'inline-block';
    const playerchoice = e.target.id;
    const computerchoice = getComputerchoice();

    //console.log(playerchoice,computerchoice);
    const result = getresult(playerchoice, computerchoice);

    //console.log(playerchoice, computerchoice, result);

    showwinner(result,computerchoice);
}
//computers choice
function getComputerchoice() {
    const rand = Math.random();
    if (rand < 0.34) {
        return 'rock';
    } else if (rand <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

//result
function getresult(p, c) {
    if (p === c) {
        return 'draw';
    } else if (p === 'rock') {
        if (c === 'paper') {
            return 'computer';
        }
        if (c === 'scissors') {
            return 'player';
        }
    } else if (p === 'paper') {
        if (c === 'scissors') {
            return 'computer';
        }
        if (c === 'rock') {
            return 'player';
        }
    } else if (p === 'scissors') {
        if (c === 'rock') {
            return 'computer';
        }
        if (c === 'paper') {
            return 'player';
        }
    }
}

//show winner
function showwinner(winner, computerchoice) {
    if (winner == 'player') {
        scoreboard.player++;
        result.innerHTML = `
            <h1 class="text-win">You Win</h1>
            <i class="fas fa-hand-${computerchoice} fa-10x"></i>
            <p>Computer chose <b>${computerchoice.toUpperCase()}</b></p>
        `;
    } 
    else if(winner==='computer'){
        scoreboard.computer++;
        result.innerHTML = `
            <h1 class="text-lose">You Lose</h1>
            <i class="fas fa-hand-${computerchoice} fa-10x"></i>
            <p>Computer chose <b>${computerchoice.toUpperCase()}</b></p>
        `;
    }
    else{
        result.innerHTML = `
            <h1>Its a Draw</h1>
            <i class="fas fa-hand-${computerchoice} fa-10x"></i>
            <p>Computer chose <b>${computerchoice.toUpperCase()}</b></p>
        `;
    }
    score.innerHTML=`
        <p>Player: ${scoreboard.player}</p>
        <p>Computer: ${scoreboard.computer}</p>
    `;

    modal.style.display='block';
}

function clearmodal(e){
    if(e.target==modal){
        modal.style.display='none';
    }
}

function restartgame(){
    scoreboard.player=0;
    scoreboard.computer=0;
    score.innerHTML=`
        <p>Player: 0</p>
        <p>Computer: 0</p>
    `
}

//event listener
choices.forEach(function (choice) {
    choice.addEventListener('click', play);
});

window.addEventListener('click',clearmodal);

restart.addEventListener('click',restartgame);