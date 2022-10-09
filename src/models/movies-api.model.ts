import { IMovie, IMoviesListItem } from "./movie.model";

enum RESPONSE_STATUSES {
      OK = "ok",
      ERROR = "error",
}

export interface IMoviesApiResponse {
      status: RESPONSE_STATUSES;
      status_message: string;
      data: IDataFromResponse;
}

export interface IDataFromResponse {
      movie_count?: number;
      limit?: number;
      page_number?: number;
      movies?: IMoviesListItem[];
      movie?: IMovie;
}