import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
// import { IMovieListItem } from '../models/movie.model'
// import { IMoviesApiResponse, IDataFromResponse } from '../models/movies-api.model'

// const rapidAPIKey = process.env.REACT_APP_RAPID_API_KEY || '';

// export const moviesApi = createApi({
//       reducerPath: 'movies',
//       baseQuery: fetchBaseQuery({baseUrl: 'https://movies-and-serials-torrent.p.rapidapi.com/movies'}),
//       tagTypes: ['Movie'],
//       endpoints: (build) => ({
//             fetchAllMovies: build.query<IMovieListItem[], {limit: number, page: number, searchValue?: string}>({
//                   query: (params) =>({
//                         url: !params.searchValue?.length ? '/latest' : `/search/${params.searchValue}`,
//                         params,
//                         headers: {
//                               'X-RapidAPI-Key': rapidAPIKey,
//                               'X-RapidAPI-Host': 'movies-and-serials-torrent.p.rapidapi.com'
//                         }
//                   }),
//                   transformResponse: (response: IMoviesApiResponse) => response.data.movies,
//                   providesTags: result => ['Movie']
//             }),
//             searchMovies: build.query<IMovieListItem[], string>({
//                   query: (search) =>({
//                         url: `/search/${search}`,
//                         headers: {
//                               'X-RapidAPI-Key': rapidAPIKey,
//                               'X-RapidAPI-Host': 'movies-and-serials-torrent.p.rapidapi.com'
//                         }
//                   }),
//                   transformResponse: (response: IMoviesApiResponse) => response.data.movies,
//                   providesTags: result => ['Movie']
//             }),
//       })
// })

// export const { useFetchAllMoviesQuery, useLazyFetchAllMoviesQuery, useLazySearchMoviesQuery } = moviesApi;
