import  {queueFilms, favoriteFilms}  from "./localFilms";

async function onFilmAction(e) {
    e.preventDefault();

    const watch = document.getElementById('watch')
    const queue = document.getElementById('queue')

    console.log(watch);
    console.log(queue);
}

export default onFilmAction;
