function closeModal() {
  const backdrop = document.querySelector('.backdrop');
  const modalContentRef = document.querySelector('.modal-content');
  backdrop.classList.remove('is-open');
  modalContentRef.classList.remove('is-open');
  backdrop.removeEventListener('click', closeModal);
}

export default closeModal;
