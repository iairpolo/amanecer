const $cielo = document.getElementById('cielo');
const $sol = document.getElementById('sol');
const $estrella1 = document.getElementById('estrella1');
const $estrella2 = document.getElementById('estrella2');
const $estrella3 = document.getElementById('estrella3');
const $estrella4 = document.getElementById('estrella4');
const $estrella5 = document.getElementById('estrella5');
const $estrella6 = document.getElementById('estrella6');
const $estrella7 = document.getElementById('estrella7');
const $estrella8 = document.getElementById('estrella8');
const $estrella9 = document.getElementById('estrella9');
const $estrella10 = document.getElementById('estrella10');
const $estrella11 = document.getElementById('estrella11');

$cielo.addEventListener('animationend', (event) => {
    // console.log(event.animationName);
    if (event.animationName === 'azul-oscuro') {
        $cielo.style.animationName = 'azul';
        $sol.style.animationName = 'sol, sol-sube';
        $estrella1.style.animationName = 'fade-out';
        $estrella2.style.animationName = 'fade-out';
        $estrella3.style.animationName = 'fade-out';
        $estrella4.style.animationName = 'fade-out';
        $estrella5.style.animationName = 'fade-out';
        $estrella6.style.animationName = 'fade-out';
        $estrella7.style.animationName = 'fade-out';
        $estrella8.style.animationName = 'fade-out';
        $estrella9.style.animationName = 'fade-out';
        $estrella10.style.animationName = 'fade-out';
        $estrella11.style.animationName = 'fade-out';
    }
    if (event.animationName === 'azul') {
        $cielo.style.animationName = 'azul-claro';
    }
    if (event.animationName === 'azul-claro') {
        $cielo.style.animationName = 'celeste';
    }
});