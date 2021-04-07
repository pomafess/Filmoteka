import modalTemp from '../templates/modal.hbs';

const mainCard = document.getElementById('film-list');
// const itemFilm = document.querySelector('.film-item');
// const modal = document.getElementById('myModal');
// const span = document.getElementsByClassName('close')[0];

// modal.insertAdjacentHTML('beforeend', modalTemp);
// console.log(itemFilm);
mainCard.addEventListener('click', openModal);

function openModal(elem) {
  if (elem.target === elem.currentTarget) {
    return;
    // modal.style.display = 'block';
  }
  console.log('jpen modal');
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

// window.addEventListener('click', function (event) {
//   if (event.target === modal) {
//     modal.style.display = 'none';
//   }
// });
