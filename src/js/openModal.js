import addToWatched from './addToWatched.js';
import addToQueue from './addToQueue.js';
import closeModal from './closeModal';

function openModal(modalContent) {
  const backdrop = document.querySelector('.backdrop');
  const modalContentRef = document.querySelector('.modal-content');
  const modalBody = modalContentRef.querySelector('.modal-body');
  modalBody.innerHTML = modalContent;

  ///найти внутри модалки кнопки
  ///повесить слушателя который добавляет в локалсторэдж ID фильма

  backdrop.classList.add('is-open');
  modalContentRef.classList.add('is-open');
  backdrop.addEventListener('click', closeModal);
}
export default openModal;
