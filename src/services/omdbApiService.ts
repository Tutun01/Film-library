import axios from "axios";
import type { ApiParamsInterface } from "../interfaces/ApiParamsInterface";
import type { ApiResponseInterface } from "../interfaces/ApiResponseInterface";
import type {omdbMoviesInterface} from "../interfaces/omdbMoviesInterface";

const API_KEY = "d85eed5";
const API_URL = "https://www.omdbapi.com";



function buildUrl(params: ApiParamsInterface[]):string{

    let searchParams = "";

    params.forEach(param => {
        searchParams += `${param.key}=${param.value}&`;
    });

    return   API_URL+"?"+searchParams+"apikey="+API_KEY;
}


export async function callOMDBApi(params: ApiParamsInterface[]):Promise<ApiResponseInterface>{
    const url = buildUrl(params);
    return await axios.get(url);
}

export function getMovieElement(movieElements: omdbMoviesInterface[]): HTMLDivElement {

    const moviesDiv = document.createElement('div');
    moviesDiv.classList.add("movies-container");

    movieElements.forEach(movie => {
        const singleMovieDiv = document.createElement('div');
        singleMovieDiv.classList.add("movie-card");

        const movieTitle = document.createElement('h1');
        movieTitle.textContent = <string> movie.Title;

        const movieYear = document.createElement('p');
        movieYear.textContent = <string> `Year: ${movie.Year}`;

        const movieType = document.createElement('p');
        movieType.textContent = <string> `Type: ${movie.Type}`;

        singleMovieDiv.append(movieTitle, movieYear, movieType);
        moviesDiv.appendChild(singleMovieDiv);
    });
    return moviesDiv;
}


