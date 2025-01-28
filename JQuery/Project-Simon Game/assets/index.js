function simonPick() {
    let armazenaUser = [];
    let armazenaRand = [];
    let armazenaRandNum = [];
    let level = 0;

    function colorPicker(event) {

        //ATRIBUI OS NUMEROS ÀS CORES E PLAY NO SOM
        if (event === 1 || event === 'green') {
            $('.green').css('background-color', 'rgb(0, 255, 0)');
            $('#green')[0].play();
            event = 'green';
            armazenaRand.push(event);
        };
        if (event === 2 || event === 'red') {
            $('.red').css('background-color', 'red');
            $('#red')[0].play();
            event = 'red';
            armazenaRand.push(event);
        };
        if (event === 3 || event === 'yellow') {
            $('.yellow').css('background-color', 'yellow');
            $('#yellow')[0].play();
            event = 'yellow';
            armazenaRand.push(event);
        };
        if (event === 4 || event === 'blue') {
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

        // Aumenta o nivel a cada passagem da função
        level++;
        $('h1').text(`Level ${level}`);

        let rand = Math.ceil(Math.random() * 4);

        // MOSTRA A COR RELACIONADA COM O RAND
        armazenaRandNum.push(rand);

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
        armazenaUser = [];

        $('.square').on('click', function (event) {
            if (armazenaUser.length < armazenaRand.length) {
                let clicado = event.target.classList[1];
                armazenaUser.push(clicado);
                console.log(armazenaUser, 'user')
                
                for (let c = 0; c < armazenaRand.length; c++) {
                    if (armazenaUser[c] != armazenaRand[c]) {
                        $('h1').text('YOU LOST!');
                        console.log('o rand é', armazenaRand[armazenaRand.length - 1])
                    };
                };
            } else {
                createsPatern;
            };
        });
    };

    //COMEÇO DO JOGO 
    $(document).on('keydown', function (event) {
        //COMEÇO DO JOGO COM A TECLA SPACE
        if (event.code === 'Space') {
            setTimeout(function () {
                createsPatern();

                // Apenas corre novamente o creates patern no fim de um clique
            }, checkAnswer());
        };
    });
};

simonPick();
