import {callOMDBApi, getMovieElement} from "./services/omdbApiService";
import {generateYear} from "./helpers/yearGenerateHelper";




const yearSelect = document.getElementById('movieYears') as HTMLSelectElement;

generateYear(1960, yearSelect, 2025);

const searchMovieElement = document.getElementById('searchMovie') as HTMLButtonElement;
const movieListDiv = document.getElementById('movieList') as HTMLDivElement;

searchMovieElement.addEventListener('click', async () => {

    const movieNameElement = document.getElementById("movieName") as HTMLInputElement;

    movieListDiv.innerHTML = '';

    if (movieNameElement.value.trim() === '') {
        alert('Please enter a valid movie name');
        return;
    }

    let response = await callOMDBApi([
        {key: 's', value: movieNameElement.value},
        {key: 'y', value: yearSelect.value}
    ]);

    if (response.data.Response === "False") {
        movieListDiv.innerHTML = 'We don\'t currently have the movie you\'re looking for, take a look at some of the following suggestions.';

        response = await callOMDBApi([{ key: 's', value: movieNameElement.value }]);
         if (response.data.Response === "True" && response.data.Search)
        {
            const moviesContainer = getMovieElement(response.data.Search);
            movieListDiv.append(moviesContainer);
        }
    } else {
        const moviesContainer:HTMLDivElement = getMovieElement(response.data.Search);
        movieListDiv.append(moviesContainer);
    }

});