import addToWatched from './addToWatched.js';
import addToQueue from './addToQueue.js';

function openModal(modalContent) {
  const backdrop = document.querySelector('.backdrop');
  const modalContentRef = document.querySelector('.modal-content');
  const modalBody = modalContentRef.querySelector('.modal-body');
  modalBody.innerHTML = modalContent;

  ///найти внутри модалки кнопки
  ///повесить слушателя который добавляет в локалсторэдж ID фильма

  backdrop.classList.add('is-open');
  modalContentRef.classList.add('is-open');

  // const filmList = document.querySelector('.film-list');
  // filmList.addEventListener('click', e => {
  //   if (e.target === e.currentTarget) {
  //     // console.log(e.target);
  //     return;
  //   }
  //   console.log('OPEN_MODAL');
  //   backdrop.classList.add('is-open');
  //   modalContainer.classList.add('is-open');
  // });
}
export default openModal;
