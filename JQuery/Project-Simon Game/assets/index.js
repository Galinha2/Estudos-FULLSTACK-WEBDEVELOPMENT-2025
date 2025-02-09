function simonPick() {
    let armazenaRand = [];
    let armazenaRandNum = [];
    let level = 0;
    let armazenaLevel = 0;

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
        if (event === 'wrong') {
            $('#wrong')[0].play();
            event = 'wrong';
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
        $('.text1').text(`Level ${level}`);

        let rand = Math.ceil(Math.random() * 4);

        // MOSTRA A COR RELACIONADA COM O RAND
        armazenaRandNum.push('c' + rand);

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
        return armazenaRandNum
    };

    // Função que lê os inputs do player
    function clikerUser() {
        $('.square').off('click');
        //armazena os inputs
        let cliquesUser = [];
        let index = 0;

        // A cada clique nos botões faz o seguinte:
        $('.square').on('click', function (event) {

            // Mete as cores dos botões nas cores default após 1,5s
            setTimeout(function () {
                defaultBtns();
            }, 150);

            // Na cor clicada pega a 3ª classe, c1, c2, c3 ou c4
            let clique = event.target.classList[2]

            cliquesUser.push(clique);

            console.log(cliquesUser);

            // Se a cor clicada estiver dentro da função das cores random no index[] certo
            if (clique === sequence[index]) {
                colorPicker(clique);
                console.log('certo')

                // Aumenta o index para a próxima cor
                index++;

                // Se o tamanho das cores selecionadas for igual as do random
                if (cliquesUser.length === sequence.length) {

                    // Reinicia todos os valores
                    index = 0;
                    cliquesUser = [];
                    sequence = createsPatern();
                };

                // Ou então acaba o jogo
            } else {
                cliquesUser = [];
                sequence = [];

                $('.lost2').css('visibility', 'visible')

                let lost = document.createElement('div');
                lost.classList.add('lost');

                let h1Lost = document.createElement('h1');
                h1Lost.classList.add('lostH1');
                $(h1Lost).text('YOU LOST'); // Usando jQuery para definir o texto

                let pLost = document.createElement('h1');
                pLost.classList.add('pLost');
                $(pLost).text('PRESS SPACE TO RESTART'); // Usando jQuery para definir o texto

                lost.appendChild(h1Lost);
                lost.appendChild(pLost);
                $('body').append(lost); // Adiciona o 'lost' ao body

                colorPicker('wrong');
                $('.lostH1').text('YOU LOST!');
                $('body').css('background-image', 'linear-gradient(180deg, rgb(94, 22, 22), rgb(85, 18, 83))');

                // Adicionar event listeners para iniciar o jogo
                $(document).on('keydown', function (event) {
                    if (event.code === 'Space') {
                        iniciarJogo();
                        $('.lost2').css('visibility', 'hidden')
                    }
                });
                
                $(document).on('touchstart', function (event) {
                    if ($(event.target).hasClass('lost2') || $(event.target).hasClass('lost')) {
                        iniciarJogo();
                        $('.lost2').css('visibility', 'hidden')
                    }
                });

                if (level > armazenaLevel) {
                    $('.num').text(level);
                }
            };
        });
    };

    //COMEÇO DO JOGO        
    function iniciarJogo() {
        // Remover event listeners para prevenir reinicializações múltiplas
        $(document).off('keydown');
        $(document).off('touchstart');
    
        // Redefinir variáveis e estado do jogo
        level = 0;
        $('.text1').text(`Level ${level}`);
        sequence = [];
        armazenaRand = [];
        armazenaRandNum = [];
        $('.lost').remove();
    
        // Iniciar o padrão e configurar os controles do usuário
        sequence = createsPatern();
        clikerUser();
    
        $('body').css('background-image', 'linear-gradient(180deg, rgb(22, 30, 94), rgb(85, 18, 83))');
    }
    
    // Adicionar event listeners para iniciar o jogo
    $(document).on('keydown', function (event) {
        if (event.code === 'Space') {
            iniciarJogo();
        }
    });
    
    $(document).on('touchstart', function (event) {
        iniciarJogo();
    });
};

simonPick();
