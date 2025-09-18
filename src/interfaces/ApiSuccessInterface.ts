import {MovieSearchResult} from "./MovieSearchResult";

export interface ApiSuccessInterface {
    Response: "True";
    Search: MovieSearchResult[];
    totalResults: string;
}