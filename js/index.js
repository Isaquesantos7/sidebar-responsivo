const btnMobile = document.querySelector('.btn-mobile');
const btnMobileClose = document.getElementById('btn-mobile-close');

btnMobile.addEventListener('click', mostrarMenuMobile);
btnMobileClose.addEventListener('click', removendoMenuMobile);

function mostrarMenuMobile() {
    const menuMobile = document.querySelector('.menu-mobile');

    if (menuMobile.classList.value === 'menu-mobile') {
        menuMobile.classList.value = 'menu-mobile-active';
    }
}

function removendoMenuMobile() {
    const menuMobile = document.querySelector('.menu-mobile-active');

    if (menuMobile.classList.value === 'menu-mobile-active') {
        menuMobile.classList.value = 'menu-mobile';
    }
}