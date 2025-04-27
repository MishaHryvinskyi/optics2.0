import './SASS/style.scss'

import { onThemeChanges } from './JS/theemes';

const themeContainer = document.querySelector('.container-theems');

const menu = document.querySelector('.js-menu');
const btnMenu = document.querySelector('.js-menu-toggle');
const anchorLinks = document.querySelectorAll('.header__navigation-link');

const menuToggle = () => {
    menu.classList.toggle('open-menu');
    btnMenu.classList.toggle('icon-chenges');

   menu.classList.contains('open-menu') 
   ? document.body.style.overflow = "hidden" 
   : document.body.style.overflow = "";
}

const menuClose = () => {
    menu.classList.remove('open-menu');
    document.body.style.overflow = '';
}

anchorLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menu.classList.contains('open-menu')) {
            menuClose();
        }
    });
});

btnMenu.addEventListener('click', menuToggle);
themeContainer.addEventListener('change', onThemeChanges);