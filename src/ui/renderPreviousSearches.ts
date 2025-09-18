import { SingleMovieSearch } from "../interfaces/movieStorage/singleMovieSearch";
import { getAllMovieSearches } from "../repository/movieStorage";
import { callOMDBApi } from "../services/omdbApiService";
import { ApiResponseErrorInterface } from "../interfaces/ApiResponseErrorInterface";
import { ApiSuccessInterface } from "../interfaces/ApiSuccessInterface";
import {listMovieResults} from "./listMovieResults";

function createSearchTag(
    movie: SingleMovieSearch,
    movieList: HTMLDivElement,
    existingMoviesDiv: HTMLDivElement
) {
    const movieLabelTitle = document.createElement("button") as HTMLButtonElement;
    movieLabelTitle.textContent = `${movie.name} ${movie.year}`;
    movieLabelTitle.classList.add("search-tag");

    movieLabelTitle.addEventListener("click", async () => {
        movieList.innerHTML = '';

        let response = await callOMDBApi([
            { key: "s", value: movie.name },
            { key: "y", value: movie.year }
        ]);

        if (response.data.Response === "False") {
            const errorData = response.data as ApiResponseErrorInterface;
            const errorMessage = document.createElement("h2");
            errorMessage.textContent = errorData.Error;
            movieList.append(errorMessage);
        } else {
            const successData = response.data as ApiSuccessInterface;
            listMovieResults(successData.Search, movieList);
        }
    });

    existingMoviesDiv.append(movieLabelTitle);
}

export function renderPreviousSearches(): void {
    const existingMoviesDiv = document.getElementById('existingMovies') as HTMLDivElement;
    const movieList = document.getElementById('movieList') as HTMLDivElement;

    existingMoviesDiv.innerHTML = '';

    const existingMovies: SingleMovieSearch[] = getAllMovieSearches();
    existingMovies.forEach((movie: SingleMovieSearch) =>
        createSearchTag(movie, movieList, existingMoviesDiv)
    );
}
