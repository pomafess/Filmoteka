import './sass/main.scss';
import './js/MovieHttpService';
import './js/renderMainPage';
import './js/modal';

import spinnerSrc from './images/sprite.svg';
import headerTemplate from './templates/header.hbs';
// import headerLibraryTemplate from './templates/header-2.hbs';
import mainGalleryTemplate from './templates/main-gallery.hbs';
import footerTemplate from './templates/footer.hbs';
// import spinerTemplate from './templates/spiner.hbs';
import modalTemplate from './templates/modal.hbs';

const headerContainer = document.getElementById('header');
const headerLibraryContainer = document.getElementById('header-2');
const mainContainer = document.getElementById('main');
const footerContainer = document.getElementById('footer');
const spinerContainer = document.getElementById('spiner');
const modalContainer = document.getElementById('myModal');


headerContainer.innerHTML = headerTemplate({src: spinnerSrc});
headerLibraryContainer.innerHTML = headerLibraryTemplate();
mainContainer.innerHTML = mainTemplate();

footerContainer.innerHTML = footerTemplate({src: spinnerSrc});
// headerLibraryContainer.innerHTML = headerLibraryTemplate();
mainContainer.innerHTML = mainGalleryTemplate();
// spinerContainer.innerHTML = spinerTemplate({ src: spinnerSrc });

modalContainer.innerHTML = modalTemplate();

// import './js/modal.js';

// const debounce = require('lodash.debounce')
