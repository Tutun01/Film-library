import {callOMDBApi} from "./services/omdbApiService";
import {generateYear} from "./helpers/yearGenerateHelper";
import {ApiResponseErrorInterface} from "./interfaces/ApiResponseErrorInterface";
import {ApiSuccessInterface} from "./interfaces/ApiSuccessInterface";
import {listMovieResults} from "./helpers/movieElementHelper";
import {getAllMovieSearches, rememberMovieSearch} from "./repository/movieStorage";
import {SingleMovieSearch} from "./interfaces/movieStorage/singleMovieSearch";
import {clearMovieStorage} from "./repository/movieStorage";

const searchMovieElement = document.getElementById('searchMovie') as HTMLButtonElement;
const movieList = document.getElementById('movieList') as HTMLDivElement;
const yearSelect = document.getElementById('movieYears') as HTMLSelectElement;
const existingMoviesDiv = document.getElementById('existingMovies') as HTMLDivElement;
const clearAllSearches = document.getElementById('ClearAllSearches') as HTMLButtonElement;

generateYear(1960, yearSelect, 2025);

const existingMovies:SingleMovieSearch[] = getAllMovieSearches();
existingMovies.forEach((movie:SingleMovieSearch) => {
    const movieLabelTitle = document.createElement("div") as HTMLDivElement;
    movieLabelTitle.textContent = `${movie.name} ${movie.year}`;
    existingMoviesDiv.append(movieLabelTitle);
});

clearAllSearches.addEventListener('click', ():void => {
    clearMovieStorage();
    existingMoviesDiv.innerHTML = '';
});


searchMovieElement.addEventListener('click', async () => {

    const movieNameElement = document.getElementById("movieName") as HTMLInputElement;

    movieList.innerHTML = '';

    if (movieNameElement.value.trim() === '') {
        alert('Please enter a valid movie name');
        return;
    }

    let response = await callOMDBApi([
        {key: 's', value: movieNameElement.value},
        {key: 'y', value: yearSelect.value}
    ]);



    if (response.data.Response === 'False') {

        const errorData = response.data as ApiResponseErrorInterface;

        const errorMessage = document.createElement('h2') as HTMLHeadingElement;
        errorMessage.textContent =
            errorData.Error + " Here are some recommendations that are similar to what you were searching:";
        movieList.append(errorMessage);


        response = await callOMDBApi([
            { key: 's', value: movieNameElement.value }
        ]);

    } else {

        rememberMovieSearch({
            name: movieNameElement.value,
            year: yearSelect.value
        });
    }


    const successData = response.data as ApiSuccessInterface;
    listMovieResults(successData.Search, movieList)


});

