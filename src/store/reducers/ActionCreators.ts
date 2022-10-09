import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IMoviesApiResponse } from "../../models/movies-api.model";

const rapidAPIKey = process.env.REACT_APP_RAPID_API_KEY || '';

interface IFetchMovies {
      limit: number;
      page: number;
}

interface ISearchMovies {
      limit: number;
      page: number;
      searchValue?: string;
}

export const fetchMovies = createAsyncThunk(
      'movies/fetchAll',
      async ({limit = 5, page = 1 } : IFetchMovies, thunkAPI) => {
            try {
                  const response = await axios.get<IMoviesApiResponse>('https://movies-and-serials-torrent.p.rapidapi.com/movies/latest', {
                        params : {
                          limit,
                          page
                        },
                        headers: {
                          'X-RapidAPI-Key': rapidAPIKey,
                          'X-RapidAPI-Host': 'movies-and-serials-torrent.p.rapidapi.com'
                        }
                  });
                  return response.data.data;
            } catch (error: any) {
                  return thunkAPI.rejectWithValue('Failed to get movies!');
            }
      }
)

export const searchMovies = createAsyncThunk(
      'movies/searchMovies',
      async ({limit = 5, page = 1, searchValue} : ISearchMovies, thunkAPI) => {
            try {
                  const response = await axios.get<IMoviesApiResponse>(`https://movies-and-serials-torrent.p.rapidapi.com/movies/search/${searchValue}`, {
                        params : {
                          limit,
                          page
                        },
                        headers: {
                          'X-RapidAPI-Key': rapidAPIKey,
                          'X-RapidAPI-Host': 'movies-and-serials-torrent.p.rapidapi.com'
                        }
                  });
                  return response.data.data;
            } catch (error: any) {
                  return thunkAPI.rejectWithValue('Failed to search movies!');
            }
      }
)

export const getMovieDetails = createAsyncThunk(
      'movies/getMovieDetails',
      async (movieId : string | number, thunkAPI) => {
            try {
                  const response = await axios.get<IMoviesApiResponse>(`https://movies-and-serials-torrent.p.rapidapi.com/movies/detail/${movieId}`, {
                        headers: {
                          'X-RapidAPI-Key': rapidAPIKey,
                          'X-RapidAPI-Host': 'movies-and-serials-torrent.p.rapidapi.com'
                        }
                  });
                  return response.data.data;
            } catch (error: any) {
                  return thunkAPI.rejectWithValue('Failed to get movie details!');
            }
      }
)

export const getMovieSuggestions = createAsyncThunk(
      'movies/getMovieSuggestions',
      async (movieId : string | number, thunkAPI) => {
            try {
                  const response = await axios.get<IMoviesApiResponse>(`https://movies-and-serials-torrent.p.rapidapi.com/movies/suggestion/${movieId}`, {
                        headers: {
                          'X-RapidAPI-Key': rapidAPIKey,
                          'X-RapidAPI-Host': 'movies-and-serials-torrent.p.rapidapi.com'
                        }
                  });
                  return response.data.data;
            } catch (error: any) {
                  return thunkAPI.rejectWithValue('Failed to get movie suggestions!');
            }
      }
)
