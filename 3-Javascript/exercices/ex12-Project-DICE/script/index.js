//PICKS THE NUMBERS AND SHOWS THE DOTS ON THE DICE
function randomNumber1(classe) {
    let rand = Math.ceil(Math.random() * 6);

    //SHOWS THE DOTS
    if (rand === 1) {
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
        h1.innerHTML = 'Player 1 WINS! 🏆';
    } else if (player2 > player1) {
        h1.innerHTML = 'Player 2 WINS! 🏆';
    } else {
        h1.innerHTML = 'Its a DRAW';
    };
};

//BUTTONS TO ROLL THE DICE
function startBtn() {
    let btnStart = document.querySelectorAll('.roll');

    //ARMAZENA OS SCORES
    let scores = [];

    for (let n = 0; n < btnStart.length; n++) {

        let btn = btnStart[n];

        //BUTÕES ROLL CLICAVEIS
        btn.addEventListener('click', function () {
            let score = randomNumber1(`.dice${n + 1}`);
            scores[n] = score;
            let hiden = btn.style.visibility = 'hidden';
            hiden;

            //ADDING RESTART BUTTON
            if (hiden) {
                existingRestartBtn = document.querySelector('.restart')

                //CRIA BOTÃO RESTART
                let restart = document.createElement('button');
                restart.classList.add('roll', `restart`);
                restart.innerHTML = 'RESTART';
                document.body.appendChild(restart);

                //REMOVE UM SEGUNDO RESTART E ESCOLHE O VENCEDOR
                if (existingRestartBtn) {
                    restart.remove()
                    displayWinner(scores[0], scores[1]);
                    console.log(scores[0], scores[1]);
                };

                //DÁ REFRESH À PAGINA QUANDO APERTA RESTART
                document.querySelector('.restart').addEventListener('click', function () {
                    location.reload();
                });
            };
        });
    };
};

//RUNNING CODE
startBtn();
