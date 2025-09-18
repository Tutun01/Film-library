import {callOMDBApi} from "../services/omdbApiService";
import {ApiSuccessInterface} from "../interfaces/ApiSuccessInterface";
import {SingleMovieSearch} from "../interfaces/movieStorage/singleMovieSearch";
import {SingleMovieInterface} from "../interfaces/singleMovieInterface";

export async function showMovieDetails(imdbId:string){

    const singleMoviePopup = document.getElementById("singleMoviePopup") as HTMLDivElement;
    const popupInner = document.getElementById("singleMoviePopupInner") as HTMLDivElement;



    const response = await callOMDBApi([
        {key: 'i', value:imdbId}
    ]);

    if (response.data.Response === 'False') {
        return;
    }

    singleMoviePopup.classList.add("active");


    popupInner.innerHTML = "";

    const data = response.data as SingleMovieInterface;

    const moviePoster = document.createElement("img") as HTMLImageElement;
    moviePoster.src = <string> data.Poster;

    const movieTitle = document.createElement("h1") as HTMLParagraphElement;
    movieTitle.textContent =  <string> data.Title;

    const movieYear = document.createElement("p")  as HTMLParagraphElement;
    movieYear.textContent = `Year: ${data.Year}`;

    const movieDirector = document.createElement("p") as HTMLParagraphElement;
    movieDirector.textContent = `Director: ${data.Director}`;

    const movieActors = document.createElement("p") as HTMLParagraphElement;
    movieActors.textContent = `Actors: ${data.Actors}`;

    const movieGenre = document.createElement("p") as HTMLParagraphElement;
    movieGenre.textContent = `Genre: ${data.Genre}`;

    const movieLanguage = document.createElement("p") as HTMLParagraphElement;
    movieLanguage.textContent = `Language: ${data.Language}`;

    const moviePlot = document.createElement("p") as HTMLParagraphElement;
    moviePlot.textContent = `Plot: ${data.Plot}`;

    const movieRuntime = document.createElement("p");
    movieRuntime.textContent = `Runtime: ${data.Runtime}`;

    const movieCountry = document.createElement("p") as HTMLParagraphElement;
    movieCountry.textContent = `Country: ${data.Country}`;

    const movieRating = document.createElement("p") as HTMLParagraphElement;
    movieRating.textContent = `IMDB Rating: ${data.imdbRating}`;


    popupInner.append(movieTitle, moviePoster, movieYear, movieDirector, movieActors, movieGenre, movieLanguage, moviePlot, movieRuntime, movieCountry, movieRating);
}

