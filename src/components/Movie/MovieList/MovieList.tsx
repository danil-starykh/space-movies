import { useEffect, useState } from 'react'
import { Box, Grid, Pagination, Typography } from '@mui/material';
import MovieItem from '../MovieItem/MovieItem';
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedReduxHooks';
import { fetchMovies } from '../../../store/reducers/ActionCreators';
import RingLoader from "react-spinners/RingLoader";
import { Colors } from '../../../styles/Styles';
import { useCalculateCountOfPages } from '../../../hooks/useCalculateCountOfPages';
import { IMovie, IMovieList, IMoviesListItem } from '../../../models/movie.model';

const MovieList: React.FC = () => {
      const dispatch = useAppDispatch();
      const { movies, isLoading, totalMoviesCount } = useAppSelector(state => state.moviesReducer);
      const [moviesData, setMoviesData] = useState<IMoviesListItem[]>([]);
      const [page, setPage] = useState<number>(1);
      const [pageLimit, setPageLimit] = useState<number>(20);
      const countOfPages = useCalculateCountOfPages(totalMoviesCount, pageLimit);
      
      useEffect(() => {
            if (!isLoading && movies) {
                  setMoviesData(movies);
            }
      }, [movies]);

      useEffect(() => {
            dispatch(fetchMovies({limit: pageLimit, page}));
      }, [page])

      return (
            <>
                  {isLoading && 
                        <Box sx={{display: 'flex', justifyContent: 'center', pt: '20%'}}>
                              <RingLoader color={Colors.muted} loading={isLoading} size={60} />
                        </Box>
                        
                  }
                  {!isLoading && movies &&
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                              <Grid container spacing={2}> 
                                    {moviesData && moviesData.map((movie: IMoviesListItem) => (
                                    <MovieItem key={movie.id} {...movie}/>
                                    ))}
                              </Grid>
                              {countOfPages > 1 &&
                                    <Pagination 
                                          sx={{ 
                                                pt: '30px',
                                          }} 
                                          siblingCount={3}
                                          page={page}
                                          count={countOfPages} 
                                          variant="outlined" 
                                          shape="rounded" 
                                          color="primary"
                                          onChange={(_, num) => setPage(num)}
                                    />
                              }
                        </Box>
                  }
                  {!isLoading && !movies &&
                        <Box>
                              <Typography variant="h5" textAlign="center" color="primary.dark">Movies not found...</Typography>
                        </Box>
                        
                  }
            </>

      )
}

export default MovieList