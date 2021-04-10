import openModal from './openModal.js';

function closeModal(e) {
  backdrop.classList.remove('is-open');
  modalContentRef.classList.remove('is-open');
  ///очищать modalContent и  закрывать
}
export default closeModal;
