import {MovieSearchResult} from "../interfaces/MovieSearchResult";
import {showMovieDetails} from "./showMovieDetails";

export function listMovieResults(movies: MovieSearchResult[], htmlMovieList: HTMLElement) {

    movies.forEach((movie) => {
        const movieTitle = document.createElement("h2") as HTMLHeadingElement;
        movieTitle.textContent = movie.Title;

        const moviePoster = document.createElement("img") as HTMLImageElement;
        moviePoster.src = movie.Poster;

        const movieYear = document.createElement("p") as HTMLParagraphElement;
        movieYear.textContent = movie.Year;

        const movieHolder = document.createElement("div") as HTMLDivElement;
        movieHolder.append(movieTitle, moviePoster, movieYear);

        const viewSingleMovieButton = document.createElement("button") as HTMLButtonElement;
        viewSingleMovieButton.textContent = "Details";
        viewSingleMovieButton.setAttribute("data-imdb-id", <string> movie.imdbID)
        movieHolder.append(viewSingleMovieButton);

        htmlMovieList.append(movieHolder);

        viewSingleMovieButton.addEventListener("click", async  () => {
           showMovieDetails(<string> movie.imdbID);
        });
    });
}