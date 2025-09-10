import type { ApiParamsInterface } from "../interfaces/ApiParamsInterface";
import type { ApiResponseInterface } from "../interfaces/ApiResponseInterface";
import type { omdbMoviesInterface } from "../interfaces/omdbMoviesInterface";
export declare function callOMDBApi(params: ApiParamsInterface[]): Promise<ApiResponseInterface>;
export declare function getMovieElement(movieElements: omdbMoviesInterface[]): HTMLDivElement;
//# sourceMappingURL=omdbApiService.d.ts.map