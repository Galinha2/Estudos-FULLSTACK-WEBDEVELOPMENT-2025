function simonPick() {
    let armazenaUser = [];
    let armazenaRand = [];
    let armazenaRandNum = [];
    let level = 0;

    function colorPicker(event) {

        //ATRIBUI OS NUMEROS ÀS CORES E PLAY NO SOM
        if (event === 'c1' || event === 'green') {
            $('.green').css('background-color', 'rgb(0, 255, 0)');
            $('#green')[0].play();
            event = 'green';
            armazenaRand.push(event);
        };
        if (event === 'c2' || event === 'red') {
            $('.red').css('background-color', 'red');
            $('#red')[0].play();
            event = 'red';
            armazenaRand.push(event);
        };
        if (event === 'c3' || event === 'yellow') {
            $('.yellow').css('background-color', 'yellow');
            $('#yellow')[0].play();
            event = 'yellow';
            armazenaRand.push(event);
        };
        if (event === 'c4' || event === 'blue') {
            $('.blue').css('background-color', 'blue');
            $('#blue')[0].play();
            event = 'blue';
            armazenaRand.push(event);
        };
    };

    //FAZ COM QUE OS BOTÕES VOLTEM AO NORMAL
    function defaultBtns() {
        $('.green').css('background-color', 'rgb(0, 128, 0,0.801)');

        $('.red').css('background-color', 'rgba(142, 0, 0, 0.801)');

        $('.yellow').css('background-color', 'rgba(163, 163, 0, 0.801)');

        $('.blue').css('background-color', 'rgba(0, 0, 111, 0.801)');
    }

    function createsPatern() {
        // Recomeça o armazenamento cada vez que a func é chamada
        armazenaRand = [];
        armazenaUser = [];

        // Aumenta o nivel a cada passagem da função
        level++;
        $('h1').text(`Level ${level}`);

        let rand = Math.ceil(Math.random() * 4);

        // MOSTRA A COR RELACIONADA COM O RAND
        armazenaRandNum.push('c' + rand);
        console.log(armazenaRandNum, 'array de RANDOM NUMS')

        // Enquanto o armazenaNum for maior que o armazenaRand corre:
        for (let n = 0; n < armazenaRandNum.length; n++) {
            setTimeout(function () {

                // Chama a função colorPicker com o index de armazenaNum convertendo o armazenaNum na cor em STR
                colorPicker(armazenaRandNum[n]);
                console.log(armazenaRand, 'rand');

                // Mete todos os botões default
                setTimeout(function () {
                    defaultBtns();
                }, 500);
            }, 1000 * (n + 1));
        };
    };

    function checkAnswer() {
        //Pega a ação de cada clique dos quadrados
        $('.square').on('click', function (event) {
            // Pega a ação, para saber qual cor pretence ao quadrado clicado
            let clicado = event.target.classList[2];

            // Envia a cor clicada para o armazenaUser
            console.log(clicado, 'user')

            return clicado;
        });
    };

    function checkingFinal() {

        // Chama as cores do robo
        createsPatern();

        // Para cada cor faz o seguinte
        for (let cor = 0; cor < armazenaRandNum.length; cor++) {

            // Apenas mostra game over com o for 1 e se ambas as cores forem diferentes
            if (cor > 1 && armazenaUser[cor] != armazenaRandNum[cor]) {
                $('h1').text('YOU LOST!');
                console.log('o rand é', armazenaRand[armazenaRand.length - 1])
            } else {
                armazenaUser.push(checkAnswer);
                console.log(armazenaUser, 'ARRAY USER');
                if (armazenaRandNum === armazenaUser) {
                    console.log('bate certo')
                } else {
                    console.log('nao bate certo')
                };
            };
        };

    };

    //COMEÇO DO JOGO 
    $(document).on('keydown', function (event) {

        //COMEÇO DO JOGO COM A TECLA SPACE
        if (event.code === 'Space') {
            setTimeout(function () {

                checkingFinal();

                // Apenas corre novamente o creates patern no fim de um clique
            }, clique);
        };
    });

    let clique = $('.square').on('click');
};

simonPick();
