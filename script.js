let dubaiText = document.getElementById('dubaitext');
let burjkhalifa = document.getElementById('burjkhalifa');
let stars = document.getElementById('stars');

windq.addEventListener('scroll', () => {
    let value = window.scrollY;

    dubaiText.style.left = value * -2 + 'px';
    burjkhalifa.style.top = value * 1 + 'px';

});