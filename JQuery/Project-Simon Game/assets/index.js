function simonPick() {
    let rand = Math.ceil(Math.random() * 4);
    let armazenaUser = [];
    let armazenaRand = [];
    let level = 0;

    function colorPicker(rand) {

        //ATRIBUI OS NUMEROS ÀS CORES E PLAY NO SOM
        if (rand === 1) {
            $('.green').css('background-color', 'rgb(0, 255, 0)');
            $('#green')[0].play();
            return rand = 'green';
        };
        if (rand === 2) {
            $('.red').css('background-color', 'red');
            $('#red')[0].play();
            return rand = 'red';
        };
        if (rand === 3) {
            $('.yellow').css('background-color', 'yellow');
            $('#yellow')[0].play();
            return rand = 'yellow';
        };
        if (rand === 4) {
            $('.blue').css('background-color', 'blue');
            $('#blue')[0].play();
            return rand = 'blue';
        };
    }

    //FAZ COM QUE OS BOTÕES VOLTEM AO NORMAL
    function defaultBtns() {
        $('.green').css('background-color', 'rgb(0, 128, 0,0.801)');

        $('.red').css('background-color', 'rgba(142, 0, 0, 0.801)');
     
        $('.yellow').css('background-color', 'rgba(163, 163, 0, 0.801)');

        $('.blue').css('background-color', 'rgba(0, 0, 111, 0.801)');
    }

    function createsPatern() {
        level++;
        $('h1').text(`Level ${level}`)
        rand;
        rand = Math.ceil(Math.random() * 4);
        //MOSTRA A COR RELACIONADA COM O NUM
        let color = colorPicker(rand);
        armazenaRand.push(color);
        colorPicker(armazenaRand)
        console.log(armazenaRand, 'rand');
        setTimeout(function() {
            defaultBtns();
        }, 300);
    }

    function checkAnswer() {
        $('.square').on('click', function(event) {
            let clicado = event.target.classList[1];
            armazenaUser.push(clicado);
            console.log(armazenaUser, 'user')
            if (clicado != armazenaRand[armazenaRand.length - 1])  {
                $('h1').text('YOU LOST!');
                console.log('o rand é', armazenaRand[armazenaRand.length - 1])
            } else {
                createsPatern();
            };
            return clicado;
        });
    };

    //COMEÇO DO JOGO 
    $(document).on('keydown', function(event) {
        //COMEÇO DO JOGO COM A TECLA SPACE
        if (event.code === 'Space'){
            setTimeout(function() {
               createsPatern(); 
            }, checkAnswer());
        }
    })
};

simonPick(); 

