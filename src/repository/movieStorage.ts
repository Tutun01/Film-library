import {SingleMovieSearch} from "../interfaces/movieStorage/singleMovieSearch";

export function rememberMovieSearch(movie: SingleMovieSearch): void {


    const existingMovies = getAllMovieSearches();
    const alredyExists: boolean = existingMovies.some((m: SingleMovieSearch) =>
        m.name.toLowerCase() === movie.name.toLowerCase()
        && m.year === movie.year
    );

    if (alredyExists) {

        return;
    }

    existingMovies.push(movie);
    localStorage.setItem("rememberedMovies", JSON.stringify(existingMovies));


}

export function getAllMovieSearches(): SingleMovieSearch [] {

    const data = localStorage.getItem("rememberedMovies");

    return data ? JSON.parse(data) : [];
}

export function clearMovieStorage(): void {
    localStorage.removeItem("rememberedMovies");
}