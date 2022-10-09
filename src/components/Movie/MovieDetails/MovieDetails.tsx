import { Box, Grid, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedReduxHooks';
import { IMovie, IMoviesListItem } from '../../../models/movie.model';
import { getMovieDetails, getMovieSuggestions } from '../../../store/reducers/ActionCreators';
import { Colors } from '../../../styles/Styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link as RouterLink } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ScreenshotsSlider } from './../../UI/ImageSlider/ScreenshotsSlider';
import StarIcon from '@mui/icons-material/Star';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MovieItem from '../MovieItem/MovieItem';

const styles = {
  mainSectionWrapper: {
    width: "100%",
    height: "500px",
  }
}

const MovieDetails: FC = () => {
  const dispatch = useAppDispatch();
  const { selectedMovie, isLoading, movieSuggestions, movieSuggestionsLoading } = useAppSelector(state => state.moviesReducer);
  const [ movie, setMovie ] = useState<IMovie>({} as IMovie);
  const [ movieSuggestionsData, setMovieSuggestionsData ] = useState<IMoviesListItem[]>([]);
  const [ movieScreenshots, setMovieScreenshots ] = useState<{screenshotUrl: string, altValue: string}[]>([]);
  const [ movieCast, setMovieCast ] = useState<string[]>([]);
  const { movieId } = useParams<{movieId: string}>();
  const [ imageBroken, setImageBroken ] = useState<boolean>(false);

  useEffect(() => {
      dispatch(getMovieDetails(movieId as string));
      dispatch(getMovieSuggestions(movieId as string));
  }, [movieId])

  useEffect(() => {
    setMovie(selectedMovie as IMovie);
    setMovieScreenshots(
      [
        {screenshotUrl: selectedMovie.large_screenshot_image1, altValue: selectedMovie.title_english},
        {screenshotUrl: selectedMovie.large_screenshot_image2, altValue: selectedMovie.title_english},
        {screenshotUrl: selectedMovie.large_screenshot_image3, altValue: selectedMovie.title_english},
      ]
    );
    const movieCast = selectedMovie.cast?.map(castStar => `${castStar.character_name} ( ${castStar.name} )`)
    setMovieCast(movieCast);

  }, [selectedMovie])

  useEffect(() => {
    setMovieSuggestionsData(movieSuggestions);
  }, [movieSuggestions])

  return (
    <>
      {isLoading && 
        <Box sx={{display: 'flex', justifyContent: 'center', pt: '20%'}}>
          <RingLoader color={Colors.muted} loading={isLoading} size={60} />
        </Box>
      }
      {!isLoading && 
          <Box component="div">
            <Box component="div" sx={{ display: 'flex', alignItems: 'center', height: '40px', mb: '10px' }}>
              <Box component={RouterLink} to={'/movies-list'} sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <ArrowBackIcon sx={{ color: 'primary.light', mr: '10px' }}/>
                <Typography variant="h6" sx={{color: 'primary.light' }}>Back</Typography>
              </Box>
            </Box>
            <Box component="div" sx={{ display: 'flex', width: '100%', mb: '20px' }}>
              { !imageBroken 
                ? <Box 
                  component="img" 
                  src={movie.large_cover_image} 
                  alt={movie.slug}
                  sx={{
                    maxHeight: '500px',
                    mr: '30px'
                  }}
                  onError={() => setImageBroken(true)}
                /> 
                : <Box
                  component="div"
                  sx={{
                    mr: '30px',
                    height: '500px',
                    minWidth: '333px',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: Colors.card_bg_color
                  }}
                >
                  <RocketLaunchIcon 
                    sx={{ 
                      height: "20%",
                      width: "20%",
                      color: Colors.card_icon_color
                    }} 
                    fontSize="large"
                  />
                </Box>
              }
              <Box component="div" sx={{ flexGrow: '1' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '20px' }}>
                  <Typography variant="h4" sx={{ color: 'text.primary' }}>{ movie.title_english }</Typography>
                  <a target="_blank" href={`https://www.imdb.com/title/${movie.imdb_code}`}>
                    <Box 
                      component="img" 
                      sx={{ height: '30px', cursor: 'pointer', ml: '20px' }}
                      src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png?20200406194337'} 
                      alt="imdb link"
                    />
                  </a>
                </Box>
                {movie.rating !== 0 && <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography component="span" variant="body1" sx={{ color: 'primary.light' }}>Rating: </Typography>
                    <StarIcon sx={{ color: Colors.rating_color, pb: '3px', pl: '5px' }} />
                    <Typography 
                      sx={{
                        color: 'text.primary', 
                        fontSize: '1.0rem', 
                        fontWeight: '500', 
                        ml: '5px',
                      }}
                    >
                      {movie.rating}
                    </Typography>
                </Box>}
                {movie.year && <Box>
                  <Typography component="span" variant="body1" sx={{ color: 'primary.light' }}>Year: </Typography>
                  <Typography component="span" variant="body1" sx={{ color: 'text.primary', pl: '5px' }}>{movie.year}</Typography>
                </Box>}
                {movie.genres && <Box>
                  <Typography component="span" variant="body1" sx={{ color: 'primary.light' }}>Genres: </Typography>
                  <Typography component="span" variant="body1" sx={{ color: 'text.primary', pl: '5px' }}>{movie.genres?.join(', ')}</Typography>
                </Box>}
                {movie.mpa_rating && <Box>
                  <Typography component="span" variant="body1" sx={{ color: 'primary.light' }}>MPA rating: </Typography>
                  <Typography component="span" variant="body1" sx={{ color: 'text.primary', pl: '5px' }}>{ movie.mpa_rating }</Typography>
                </Box>}
                {movieCast && <Box>
                  <Typography component="span" variant="body1" sx={{ color: 'primary.light' }}>Time: </Typography>
                  <Typography component="span" variant="body1" sx={{ color: 'text.primary', pl: '5px' }}>{ movie.runtime } min.</Typography>
                </Box>}
                {movieCast && <Box>
                  <Typography component="span" variant="body1" sx={{ color: 'primary.light' }}>Stars: </Typography>
                  <Typography component="span" variant="body1" sx={{ color: 'text.primary', pl: '5px' }}>{movieCast?.join(' - ')}</Typography>
                </Box>}
                {movie.description_full && <Box sx={{ mt: '20px' }}>
                  <Typography component="span" variant="body1" sx={{ color: 'primary.light' }}>Description: </Typography>
                  <Typography component="span" variant="body1" sx={{ color: 'text.primary', pl: '5px' }}>{movie.description_full}</Typography>
                </Box>}
              </Box>
            </Box>
            {movieScreenshots && <Box component="div">
              <Typography variant="h5" sx={{ color: 'primary.light', mb: '20px' }}>Screenshots</Typography>
              <Box component="div" sx={{ mb: '20px' }}>
                <ScreenshotsSlider screenshots={movieScreenshots}/>
              </Box>
            </Box>}
            {movie.yt_trailer_code && <Box component="div">
              <Typography variant="h5" sx={{ color: 'primary.light', mb: '20px' }}>Trailer</Typography>
              <Box component="div" sx={{ mb: '20px' }}>
              <iframe width="100%" height="600px" src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </Box>
            </Box>}
            { movieSuggestionsLoading && 
                <Box sx={{display: 'flex', justifyContent: 'center', pt: '20%'}}>
                      <RingLoader color={Colors.muted} loading={isLoading} size={60} />
                </Box>    
            }
            {!movieSuggestionsLoading && movieSuggestionsData &&
              <>
                <Typography variant="h5" sx={{ color: 'primary.light', mb: '20px' }}>Suggestions</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Grid container spacing={2}> 
                    {movieSuggestionsData && movieSuggestionsData.map((movie: IMoviesListItem) => (
                      <MovieItem key={movie.id} {...movie}/>
                    ))}
                  </Grid>
                </Box>
              </>
            }
          </Box>
      }
    </>
  )
};

export default MovieDetails;