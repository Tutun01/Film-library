import {clearMovieStorage} from "../repository/movieStorage";
import {renderPreviousSearches} from "../ui/renderPreviousSearches";

export function clearMovieSearchesHandler(): void {
    clearMovieStorage();
    renderPreviousSearches();
}