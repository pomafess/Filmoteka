import modal from '../templates/modal.hbs';
import filmInfoTemplate from '../templates/film-info.hbs';

const modalEl = document.getElementById('myModal');

document.addEventListener('DOMContentLoaded', async function (event) {
  const modalContainer = document.querySelector('.modal-body');
  const filmList = document.querySelector('#main .film-list');
  const btnClose = document.getElementsByClassName('close')[0];

  modalContainer.innerHTML = filmInfoTemplate();
  console.log(modalContainer);

  filmList.addEventListener('click', openModal);
  btnClose.addEventListener('click', closeModal);
});

// const itemFilm = document.querySelector('.film-item');

// console.log(itemFilm);
// filmList.addEventListener('click', openModal);

function openModal(elem) {
  if (elem.target === elem.currentTarget) {
    return;
    // modal.style.display = 'block';
  }
  console.log('open modal');
  modalEl.style.display = 'block';
}

function closeModal() {
  modalEl.style.display = 'none';
}
// span.addEventListener('click', function () {
//   modal.style.display = 'none';
// });

// const btn = document.getElementById('myBtn');

// modal.style.display = 'block';//---------убрать

// btn.addEventListener('click', function (){---------+++++++
//   modal.style.display = 'block';
// }
// )

window.addEventListener('click', function (event) {
  if (event.target === modalEl) {
    modalEl.style.display = 'none';
  }
});
// function keydownESC(evt) {
//   console.log(evt);

//   if (evt.code === 'Escape') {
//     closeModal();
//   }
// }
