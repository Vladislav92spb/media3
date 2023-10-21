const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');
const menuInv = document.querySelector('.menu__invisible-btn');

menuInv.addEventListener('click', (e) => {
    menuBtn.classList.toggle('menu__btn--open');
    menuList.classList.toggle('menu__list--open');
});

