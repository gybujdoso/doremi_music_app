let myKeys = document.querySelectorAll('.key');

for (let x = 0; x < myKeys.length; x++) {
    myKeys[x].addEventListener('click', () => {

    playSnd(myKeys[x].innerHTML.toLowerCase());
    })

}

document.addEventListener('keydown', (btn) => {

    playSnd(btn.key.toLowerCase());
    let pressed_key = btn.key.toLowerCase();

    for(let x = 0; x < myKeys.length; x++) {
        myKeys[x].classList.remove('activated');
    }

    for(let x = 0; x < myKeys.length; x++) {
        if (pressed_key == myKeys[x].innerHTML.toLowerCase()) {
            myKeys[x].classList.add('activated');
        }
    }


})

function playSnd(key) {

    switch(key) {

        case 'c':
        var sound = new Audio('doremi/do.mp3');
        sound.play();  
        break;

        case 'd':
        var sound = new Audio('doremi/re.mp3');
        sound.play();
        break;

        case 'e':
        var sound = new Audio('doremi/mi.mp3');
        sound.play();
        break;

        case 'f':
        var sound = new Audio('doremi/fa.mp3');
        sound.play();
        break;

        case 'g':
        var sound = new Audio('doremi/sol.mp3');
        sound.play();
        break;

        case 'g':
        var sound = new Audio('doremi/sol.mp3');
        sound.play();
        break;

        case 'a':
        var sound = new Audio('doremi/la.mp3');
        sound.play();
        break;

        case 'b':
        var sound = new Audio('doremi/ti.mp3');
        sound.play();
        break;

        case 'k':
        var sound = new Audio('doremi/doh.mp3');
        sound.play();
        break;

        default:
        console.log(key)
    
    }

}

