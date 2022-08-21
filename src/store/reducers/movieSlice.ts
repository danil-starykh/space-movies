import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "../../models/movie.model";

interface MoviesState {
      movies: IMovie[];
      isLoading: boolean;
      error: string;
}

const initialState: MoviesState = {
      movies: [],
      isLoading: false,
      error: '',
}

export const movieSlice = createSlice({
      name: 'movies',
      initialState,
      reducers: {
            searchMovies(state, action: PayloadAction<IMovie>) {
                  state.movies.push({
                        id: action.payload.id,
                        title: action.payload.title,
                        description: action.payload.description,
                  })
            },
            searchMoviesSuccess(state, action: PayloadAction<IMovie>) {
                  state.movies.push({
                        id: action.payload.id,
                        title: action.payload.title,
                        description: action.payload.description,
                  })
            },
            searchMoviesError(state, action: PayloadAction<IMovie>) {
                  state.movies.push({
                        id: action.payload.id,
                        title: action.payload.title,
                        description: action.payload.description,
                  })
            }
      },
});

export const { searchMovies, searchMoviesSuccess, searchMoviesError } = movieSlice.actions;

export default movieSlice.reducer;