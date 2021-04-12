import queueFilms from './localQueueFilms';

function addToQueue(id) {
  const queuehBtn = document.querySelector('.btn-modal-queue');

  queuehBtn.addEventListener('click', () => {
    queuehBtn.classList.toggle('isActive');

    const isActive = queuehBtn.classList.contains('isActive');
    queuehBtn.textContent = isActive ? 'uje v ocheredi' : 'ADD TO QUEUE';

    if (!queueFilms.includes(id)) {
      queueFilms.push(id);
    } else {
      const index = queueFilms.indexOf(id);
      queueFilms.splice(index, 1);
    }

    const queueFilmString = JSON.stringify(queueFilms);

    localStorage.setItem('queue-films', queueFilmString);
  });
}
export default addToQueue;
