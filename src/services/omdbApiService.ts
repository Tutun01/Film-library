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




