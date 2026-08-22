const button = document.getElementById('button');
const buttonGradient = document.getElementById('button-gradient');
let clickCount = document.getElementById('clickCount');
let clicksCounted = 0;
const timer = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
button.addEventListener('click', async () => {
    button.classList.add('clicking');
    buttonGradient.classList.add('clicking');
    if (clicksCounted === 0) {
        clickCount.classList.add('firstClickAnim');
        clickCount.style.opacity = 1;
    }
    clicksCounted++;
    clickCount.innerHTML = "You have clicked the button " + clicksCounted + " times!";

    button.style.transform = 'translate(-50%, -50%) scale(1.1)';
    buttonGradient.style.transform = 'translate(-50%, -50%) scale(1.1)';

    await timer(150);

    button.style.transform = 'translate(-50%, -50%) scale(1.25)';
    buttonGradient.style.transform = 'translate(-50%, -50%) scale(1.25)';

    button.classList.remove('clicking');
    buttonGradient.classList.remove('clicking');
});