import {searchMovieHandler} from "../handlers/searchMovieHandler";
import {clearMovieSearchesHandler} from "../handlers/clearMovieSearchesHandler";

export function bindSearchEvents() :void {
    const searchMovieElement = document.getElementById('searchMovie') as HTMLButtonElement;
    const clearAllSearches = document.getElementById('ClearAllSearches') as HTMLButtonElement;

    searchMovieElement.addEventListener('click', searchMovieHandler);
    clearAllSearches.addEventListener('click', clearMovieSearchesHandler);
}