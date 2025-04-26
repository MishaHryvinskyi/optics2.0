import './SASS/style.scss'

import { onThemeChanges } from './JS/theemes';

const themeContainer = document.querySelector('.container-theems');

themeContainer.addEventListener('change', onThemeChanges);