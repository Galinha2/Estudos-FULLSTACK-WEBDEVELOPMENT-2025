function selectClass () {
    let buttons = document.querySelectorAll('button');

    for (let n = 0; n < buttons.length; n++) {
        buttons[n].addEventListener('click', function () {
        buttonAnimation()
        });
        makesound();
        buttonAnimation();
    };

    document.addEventListener('keydown', function(event) {
        console.log(event)
        buttonAnimation(event.key)
        makesound(event.key);
    });
    
    function makesound(key) {

            switch (key) {
                case key = 'w':
                    let tom1 = new Audio(`sounds/tom-1.mp3`);
                    tom1.play();
                    break;
                
                case 'a':
                    let tom2 = new Audio(`sounds/tom-2.mp3`);
                    tom2.play();

                case 's':
                    let tom3 = new Audio(`sounds/tom-3.mp3`);
                    tom3.play();
                    break;
                
                case 'd':
                    let tom4 = new Audio(`sounds/tom-4.mp3`);
                    tom4.play();

                case 'j':
                    let snare = new Audio(`sounds/snare.mp3`);
                    snare.play();
                    break;
                
                case 'k':
                    let kick = new Audio(`sounds/kick-bass.mp3`);
                    kick.play();

                case 'l':
                    let crash = new Audio(`sounds/crash.mp3`);
                    crash.play();

                default:
                    break;
            }
    }

    function buttonAnimation(key) {
        let activeButton = document.querySelector('.', key);
        activeButton.classList.add('pressed')
    }
};

selectClass();
