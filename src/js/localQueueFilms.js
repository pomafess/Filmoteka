const queueFilms = [];

const localQueueFilms = localStorage.getItem('queue-films');
if (localQueueFilms) {
  queueFilms.push(...JSON.parse(localQueueFilms));
}

export default queueFilms;
