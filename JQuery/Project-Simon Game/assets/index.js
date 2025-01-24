function simonPick() {

    //COMEÇO DO JOGO 
    $(document).on('keydown', function(event) {

        //COMEÇO DO JOGO COM A TECLA SPACE
        if (event.code === 'Space'){

            while (true) {
                //ESCOLHE A COR SELECIONADA DE 1 A 4 POR ORDEM DELAS
                let rand = Math.ceil(Math.random() * 4);

                //ATRIBUI OS NUMEROS ÀS CORES E PLAY NO SOM
                if (rand === 1) {
                    $('.green').css('background-color', 'rgb(0, 255, 0)');
                    $('#green')[0].play();
                };
                if (rand === 2) {
                    $('.red').css('background-color', 'red');
                    $('#red')[0].play();
                };
                if (rand === 3) {
                    $('.yellow').css('background-color', 'yellow');
                    $('#yellow')[0].play();
                };
                if (rand === 4) {
                    $('.blue').css('background-color', 'blue');
                    $('#blue')[0].play();
                };
            }
        };
    })
    $('.square').on('click', function(event) {
        console.log(event);
    });

};

simonPick(); 

