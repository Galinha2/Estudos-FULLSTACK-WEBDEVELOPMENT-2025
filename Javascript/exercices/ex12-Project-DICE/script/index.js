//PICKS THE NUMBERS AND SHOWS THE DOTS ON THE DICE
function randomNumber1(classe) {
    let rand = Math.floor(Math.random() * 7);

    //SHOWS THE DOTS
    if (rand === 1 || rand === 0) {
        let num = document.querySelectorAll(`${classe} .one`);
        for (let n = 0; n < num.length; n++) {
            num[n].style.visibility = 'visible';
        }
        return 1;
    }
    if (rand === 2) {
        let num = document.querySelectorAll(`${classe} .two`);
        for (let n = 0; n < num.length; n++) {
            num[n].style.visibility = 'visible';
        }
        return 2;
    }
    if (rand === 3) {
        let num = document.querySelectorAll(`${classe} .tree`);
        for (let n = 0; n < num.length; n++) {
            num[n].style.visibility = 'visible';
        }
        return 3;
    }
    if (rand === 4) {
        let num = document.querySelectorAll(`${classe} .four`);
        for (let n = 0; n < num.length; n++) {
            num[n].style.visibility = 'visible';
        }
        return 4;
    }
    if (rand === 5) {
        let num = document.querySelectorAll(`${classe} .five`);
        for (let n = 0; n < num.length; n++) {
            num[n].style.visibility = 'visible';
        }
        return 5;
    }
    if (rand === 6) {
        let num = document.querySelectorAll(`${classe} .six`);
        for (let n = 0; n < num.length; n++) {
            num[n].style.visibility = 'visible';
        }
        return 6;
    }
}

//DECLARES THE WINNER
function displayWinner(player1, player2) {
    let h1 = document.querySelector('h1');
    if (player1 > player2) {
        h1.innerHTML = 'Player 1 WINS! 🏆'
    } else if (player2 > player1) {
        h1.innerHTML = 'Player 2 WINS! 🏆'
    } else {
        h1.innerHTML = 'Its a DRAW'
    }
};

//RUNNING CODE
var p1 = randomNumber1('.dice1');
var p2 = randomNumber1('.dice2');
displayWinner(p1, p2);