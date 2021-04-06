import spinnerSrc from './images/sprite.svg'

import headerTemplate from './templates/header.hbs';

const headerContainer = document.getElementById('header');
headerContainer.innerHTML = headerTemplate();

import headerLibraryTemplate from './templates/header-2.hbs';

const headerLibraryContainer = document.getElementById('header-2');
headerLibraryContainer.innerHTML = headerLibraryTemplate();

import mainTemplate from './templates/main-gallery.hbs';

const mainContainer = document.getElementById('main');
mainContainer.innerHTML = mainTemplate();

import footerTemplate from './templates/footer.hbs';

const footerContainer = document.getElementById('footer');
footerContainer.innerHTML = footerTemplate();

import spinerTemplate from './templates/spiner.hbs';

const spinerContainer = document.getElementById('spiner');
spinerContainer.innerHTML = spinerTemplate({src: spinnerSrc});

import modalTemplate from './templates/modal.hbs';

const modalContainer = document.getElementById('myModal');
modalContainer.innerHTML = modalTemplate();

import './sass/main.scss';
import './js/services.js';
import './js/modal.js';

// const debounce = require('lodash.debounce')
