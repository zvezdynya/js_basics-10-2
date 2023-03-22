const buttons = document.querySelectorAll('button');
const images = document.querySelectorAll('img');
const btnPrevious = document.querySelector('#btn_previous');
const btnNext = document.querySelector('#btn_next');
let img = 0;

buttons.forEach(btn => {
    btn.addEventListener('click', () => {        
        images[img].style.display = 'none';
        if (btn == btnNext) {
            img++;
            if (img >= images.length) {
                img = 0;
            }
        } else if (btn == btnPrevious) {
            img--;
            if (img < 0) {
                img = images.length - 1;
            }
        }
        images[img].style.display = 'block';
    });
});