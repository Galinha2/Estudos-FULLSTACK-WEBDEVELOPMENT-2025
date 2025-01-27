function simonPick() {

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

    //ONDE  O JOGO CORRE
    function jogoCompleto() {
        var armazenaRand = [];
        let armazenaUser = [];

        //NO INTEREVALO METE OS BOTÕES DEFAULT
        setInterval(function() {
            defaultBtns();
            
            //NA PAUSA EM 1 EM 1 SEGUNDO CORRE ISTO
            setTimeout(function() {
                let rand = Math.ceil(Math.random() * 4);
                
                //MOSTRA A COR RELACIONADA COM O NUM
                let color = colorPicker(rand);
                armazenaRand.push(color);
                console.log(armazenaRand);
                
                //MOSTRA OS BOTÕES QUE O USER CARREGOU
                //PRECISO METER PAUSA PRA USER INPUT AQUI EM BAIXO
                let user = checkAnswer();
                armazenaUser.push(user);
                console.log(armazenaUser);

            },500); 
        }, 1000);
    }

    function checkAnswer() {
        $('.square').on('click', function(event) {
            let clicado = event.target.classList[1];
            return clicado;
        });
    }

    //COMEÇO DO JOGO 
    $(document).on('keydown', function(event) {

        //COMEÇO DO JOGO COM A TECLA SPACE
        if (event.code === 'Space'){
            
            jogoCompleto()
        }
    })
  
};

simonPick(); 

