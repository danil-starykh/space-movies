import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie, IMoviesListItem } from "../../models/movie.model";
import { IDataFromResponse } from "../../models/movies-api.model";
import { fetchMovies, getMovieDetails, getMovieSuggestions, searchMovies } from "./ActionCreators";

interface MoviesState {
      movies: IMoviesListItem[];
      selectedMovie: IMovie;
      movieSuggestions: IMoviesListItem[];
      movieSuggestionsLoading: boolean;
      totalMoviesCount: any;
      isLoading: boolean;
      errorMessage: string;
}

const initialState: MoviesState = {
      movies: [],
      selectedMovie: {} as IMovie,
      movieSuggestions: [],
      movieSuggestionsLoading: false,
      totalMoviesCount: 1,
      isLoading: false,
      errorMessage: '',
}

export const moviesSlice = createSlice({
      name: 'movies',
      initialState,
      reducers: { },
      extraReducers: { 
            [fetchMovies.pending.type]: (state: MoviesState) => {
                  state.isLoading = true;
            },
            [fetchMovies.fulfilled.type]: (state: MoviesState, action: PayloadAction<IDataFromResponse>) => {
                  state.isLoading = false;
                  state.errorMessage = '';
                  state.totalMoviesCount = action.payload?.movie_count || 0;
                  state.movies = action.payload?.movies || [];
            },
            [fetchMovies.rejected.type]: (state: MoviesState, action: PayloadAction<string>) => {
                  state.isLoading = false;
                  state.errorMessage = action.payload;
            },
            [searchMovies.pending.type]: (state) => {
                  state.isLoading = true;
            },
            [searchMovies.fulfilled.type]: (state: MoviesState, action: PayloadAction<IDataFromResponse>) => {
                  state.isLoading = false;
                  state.errorMessage = '';
                  state.totalMoviesCount = action.payload?.movie_count || 0;
                  state.movies = action.payload?.movies || [];
            },
            [searchMovies.rejected.type]: (state: MoviesState, action: PayloadAction<string>) => {
                  state.isLoading = false;
                  state.errorMessage = action.payload;
            },
            [getMovieDetails.pending.type]: (state) => {
                  state.isLoading = true;
            },
            [getMovieDetails.fulfilled.type]: (state: MoviesState, action: PayloadAction<IDataFromResponse>) => {
                  state.isLoading = false;
                  state.errorMessage = '';
                  state.selectedMovie = action.payload?.movie as IMovie;
            },
            [getMovieDetails.rejected.type]: (state: MoviesState, action: PayloadAction<string>) => {
                  state.isLoading = false;
                  state.errorMessage = action.payload;
            },
            [getMovieSuggestions.pending.type]: (state) => {
                  state.movieSuggestionsLoading = true;
            },
            [getMovieSuggestions.fulfilled.type]: (state: MoviesState, action: PayloadAction<IDataFromResponse>) => {
                  state.movieSuggestionsLoading = false;
                  state.errorMessage = '';
                  state.movieSuggestions = action.payload?.movies || [];
            },
            [getMovieSuggestions.rejected.type]: (state: MoviesState, action: PayloadAction<string>) => {
                  state.movieSuggestionsLoading = false;
                  state.errorMessage = action.payload;
            },
      }
});

export default moviesSlice.reducer;