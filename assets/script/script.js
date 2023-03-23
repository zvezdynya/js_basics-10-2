
//смена src
const img = document.querySelector('#image');

const changeNext = () => {
    const nextImg = '/assets/image/cat_2.jpg';
    return img.src == nextImg;
};

const changePrevious = () => {
    const prevImg = '/assets/image/cat_6.jpg';
    return img.src == prevImg;
};



/*
//смена бэкграунда
const imgBack = document.querySelector('.image');
const btnPrevious = document.querySelector('#btn_previous');
const btnNext = document.querySelector('#btn_next');

const changeBackgroundNext = () => imgBack.style.backgroundImage = 'url(/assets/image/cat_5.jpg)';

const changeBackgroundPrevious = () => imgBack.style.backgroundImage = 'url(/assets/image/cat_8.jpg)';
*/


//для вариантв с массивом
// const buttons = document.querySelectorAll('button');
// const images = document.querySelectorAll('img');
// const btnPrevious = document.querySelector('#btn_previous');
// const btnNext = document.querySelector('#btn_next');
// let img = 0;

// buttons.forEach(btn => {
//     btn.addEventListener('click', () => {        
//         images[img].style.display = 'none';
//         if (btn == btnNext) {
//             img++;
//             if (img >= images.length) {
//                 img = 0;
//             }
//         } else if (btn == btnPrevious) {
//             img--;
//             if (img < 0) {
//                 img = images.length - 1;
//             }
//         }
//         images[img].style.display = 'block';
//     });
// });