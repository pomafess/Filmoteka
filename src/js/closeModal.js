import openModal from './openModal.js';
import './teamModal';

function closeModal() {
  const backdrop = document.querySelector('.backdrop');
  const modalContentRef = document.querySelector('.modal-content');
  backdrop.classList.remove('is-open');
  modalContentRef.classList.remove('is-open');
  backdrop.removeEventListener('click', closeModal);

  ///очищать modalContent и  закрывать
}

export default closeModal;
