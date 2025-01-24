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

    function defaultBtns() {
        $('.green').css('background-color', 'rgb(0, 128, 0,0.801)');

        $('.red').css('background-color', 'rgba(142, 0, 0, 0.801)');
     
        $('.yellow').css('background-color', 'rgba(163, 163, 0, 0.801)');

        $('.blue').css('background-color', 'rgba(0, 0, 111, 0.801)');
    }

    function jogoCompleto() {
        var armazenaRand = [];
        let armazenaUser = [];

        setInterval(function() {
            defaultBtns();
            
            setTimeout(function() {
                let rand = Math.ceil(Math.random() * 4);
                colorPicker(rand);
                let color = colorPicker(rand);
                armazenaRand.push(color);
                console.log(armazenaRand);
            },500); 
        }, 1000);
    }

    //COMEÇO DO JOGO 
    $(document).on('keydown', function(event) {

        //COMEÇO DO JOGO COM A TECLA SPACE
        if (event.code === 'Space'){
            
            jogoCompleto()
        }
            for (let c = 0; c < 21; c++) {
                

        };
    })
    $('.square').on('click', function(event) {
        console.log(event);
    });

    
};

simonPick(); 

