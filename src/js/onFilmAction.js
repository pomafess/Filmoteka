// import  {queueFilms, favoriteFilms}  from "./localFilms";
import {renderWatchedFilms,renderQueueFilms} from "./renderFuncs";

async function onFilmAction(e) {
    e.preventDefault();
    if(e.target.id === "watch") {
        renderWatchedFilms();
    }
    if(e.target.id === "queue") {
        renderQueueFilms();
    }    
}

export default onFilmAction;
