import addToWatched from './addToWatched.js'
import addToQueue from './addToQueue.js'
function openModal(modalContent) {
    const backdrop = document.querySelector('.backdrop');
    const modalContentRef = document.querySelector('modal');
    const modalContainer = document.getElementById('myModal');
    modalContentRef.innerHTML = modalContent;
    ///найти внутри модалки кнопки
    ///повесить слушателя который добавляет в локалсторэдж ID фильма
    backdrop.classList.add('is-open');
    modalContainer.classList.add('is-open');

//   if (elem.target === elem.currentTarget) {
//     return;
//     // modal.style.display = 'block';
//   }
//   console.log('open modal');
//   modalEl.style.display = 'block';
}
export default openModal