/* Add click event to each button
document.querySelectorAll("button.drum").forEach((btn, index) => {
    btn.addEventListener("click", () => {

        let soundFile = "sounds/";

        if (index < 4) {
            soundFile += "tom-" + (index + 1) + ".mp3";
        } else switch (index) {
            case 4:
                soundFile += "crash.mp3";
                break;
            case 5:
                soundFile += "kick-bass.mp3";
                break;
            case 6:
                soundFile += "snare.mp3";
                break;
        }
        btn.style = "color: white;"
        const audio = new Audio(soundFile);
        audio.play();
    });
});

document.addEventListener('keydown', function(e) {

    let soundFile = "sounds/";

    switch (e.key) {
        case 'w':
            soundFile += 'tom-1.mp3';
            break;
        case 'a':
            soundFile += 'tom-2.mp3';
            break;
        case 's':
            soundFile += 'tom-3.mp3';
            break;
        case 'd':
            soundFile += 'tom-4.mp3';
            break;
        case 'j':
            soundFile += 'crash.mp3';
            break;
        case 'k':
            soundFile += 'kick-bass.mp3';
            break;
        case 'l':
            soundFile += 'snare.mp3';
            break;
    }

    e.style = "color: white";
    const audio = new Audio(soundFile);
    audio.play();
});
*/
//Add event listenr to each button
const drumCount = document.querySelectorAll('button.drum').length;

for (let i = 0; i < drumCount; i++) {
    document.querySelectorAll('button.drum')[i].addEventListener('click', function() {
        makeSound(this.innerHTML);
        animateButton(this.innerHTML);
    });

}

//Add sound to keydown event
document.addEventListener('keydown', e => {
    makeSound(e.key);
    animateButton(e.key);
});


let makeSound = key => {
    switch (key) {
        case 'w':
            const tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            const tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            const tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            const tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            const crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'k':
            const kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;
        case 'l':
            const snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        default:
            alert(`${key} NOT a valid key !!`);
    }
};

let animateButton = key => {
    // get the button associated with key pressed 
    const currentKey = document.querySelector(`.${key}`);

    // Add CSS class 'pressed' to this button 
    currentKey.classList.add('pressed');

    // Remove the class from the pressed button in less then a second
    setTimeout(() => currentKey.classList.remove('pressed'), 100);
}