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
import { classes } from './styles';

const youtubeIFrameArgs = {
  width: "100%",
  height: "600px",
  title: "YouTube video player",
  frameBorder: "0",
  allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
};

const MovieDetails: FC = () => {
  const dispatch = useAppDispatch();
  const { selectedMovie, isLoading, movieSuggestions, movieSuggestionsLoading } = useAppSelector(state => state.moviesReducer);
  const [movie, setMovie] = useState<IMovie>({} as IMovie);
  const [movieSuggestionsData, setMovieSuggestionsData] = useState<IMoviesListItem[]>([]);
  const [movieScreenshots, setMovieScreenshots] = useState<{ screenshotUrl: string, altValue: string }[]>([]);
  const [movieCast, setMovieCast] = useState<string[]>([]);
  const { movieId } = useParams<{ movieId: string }>();
  const [imageBroken, setImageBroken] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getMovieDetails(movieId as string));
    dispatch(getMovieSuggestions(movieId as string));
  }, [movieId]);

  useEffect(() => {
    setMovie(selectedMovie as IMovie);
    setMovieScreenshots(
      [
        { screenshotUrl: selectedMovie.large_screenshot_image1, altValue: selectedMovie.title_english },
        { screenshotUrl: selectedMovie.large_screenshot_image2, altValue: selectedMovie.title_english },
        { screenshotUrl: selectedMovie.large_screenshot_image3, altValue: selectedMovie.title_english },
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
        <Box sx={classes.loaderWrapper}>
          <RingLoader color={Colors.muted} loading={isLoading} size={60} />
        </Box>
      }
      {!isLoading &&
        <Box component="div">
          <Box component="div" sx={classes.backBtnWrapper}>
            <Box component={RouterLink} to={'/movies-list'} sx={classes.backBtnBlock}>
              <ArrowBackIcon sx={classes.backBtnIcon} />
              <Typography variant="h6" sx={classes.backBtnText}>Back</Typography>
            </Box>
          </Box>
          <Box component="div" sx={classes.movieInfoSection}>
            {!imageBroken
              ? <Box
                component="img"
                src={movie.large_cover_image}
                alt={movie.slug}
                sx={classes.movieImageWrapper}
                onError={() => setImageBroken(true)}
              />
              : <Box
                component="div"
                sx={classes.brokenMovieImageWrapper}
              >
                <RocketLaunchIcon
                  sx={classes.brokenMovieImageIcon}
                />
              </Box>
            }
            <Box component="div" sx={classes.movieInfoWrapper}>
              <Box sx={classes.movieInfoTitleWrapper}>
                <Typography variant="h4" sx={classes.movieInfoTitle}>{movie.title_english}</Typography>
                <a target="_blank" rel="noreferrer" href={`https://www.imdb.com/title/${movie.imdb_code}`}>
                  <Box
                    component="img"
                    sx={classes.movieInfoImdbImage}
                    src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png?20200406194337'}
                    alt="imdb link"
                  />
                </a>
              </Box>
              {movie.rating !== 0 && <Box sx={classes.movieInfoRating}>
                <Typography component="span" variant="body1" sx={classes.movieInfoItem}>Rating: </Typography>
                <StarIcon sx={classes.movieInfoRatingIcon} />
                <Typography
                  sx={classes.movieInfoRatingText}
                >
                  {movie.rating}
                </Typography>
              </Box>}
              {movie.year && <Box>
                <Typography component="span" variant="body1" sx={classes.movieInfoItem}>Year: </Typography>
                <Typography component="span" variant="body1" sx={classes.movieInfoItemText}>{movie.year}</Typography>
              </Box>}
              {movie.genres && <Box>
                <Typography component="span" variant="body1" sx={classes.movieInfoItem}>Genres: </Typography>
                <Typography component="span" variant="body1" sx={classes.movieInfoItemText}>{movie.genres?.join(', ')}</Typography>
              </Box>}
              {movie.mpa_rating && <Box>
                <Typography component="span" variant="body1" sx={classes.movieInfoItem}>MPA rating: </Typography>
                <Typography component="span" variant="body1" sx={classes.movieInfoItemText}>{movie.mpa_rating}</Typography>
              </Box>}
              {movieCast && <Box>
                <Typography component="span" variant="body1" sx={classes.movieInfoItem}>Time: </Typography>
                <Typography component="span" variant="body1" sx={classes.movieInfoItemText}>{movie.runtime} min.</Typography>
              </Box>}
              {movieCast && <Box>
                <Typography component="span" variant="body1" sx={classes.movieInfoItem}>Stars: </Typography>
                <Typography component="span" variant="body1" sx={classes.movieInfoItemText}>{movieCast?.join(' - ')}</Typography>
              </Box>}
              {movie.description_full && 
                <Box sx={ classes.movieInfoDescriptionWrapper }>
                <Typography component="span" variant="body1" sx={classes.movieInfoItem}>Description: </Typography>
                <Typography component="span" variant="body1" sx={classes.movieInfoItemText}>{movie.description_full}</Typography>
                </Box>
              }
            </Box>
          </Box>
          {movieScreenshots &&
            <Box component="div" sx={ classes.sectionWrapper }>
              <Typography variant="h5" sx={classes.sectionTitle}>Screenshots</Typography>
              <Box component="div">
                <ScreenshotsSlider screenshots={movieScreenshots} />
              </Box>
            </Box>
          }
          {movie.yt_trailer_code &&
            <Box component="div" sx={ classes.sectionWrapper }>
              <Typography variant="h5" sx={classes.sectionTitle}>Trailer</Typography>
              <Box component="div">
                <iframe
                  {...youtubeIFrameArgs}
                  src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`}
                  allowFullScreen
                ></iframe>
              </Box>
            </Box>
          }
          {movieSuggestionsLoading &&
            <Box sx={classes.loaderWrapper}>
              <RingLoader color={Colors.muted} loading={isLoading} size={60} />
            </Box>
          }
          {!movieSuggestionsLoading && movieSuggestionsData &&
            <>
              <Typography variant="h5" sx={classes.sectionTitle}>Suggestions</Typography>
              <Box sx={classes.suggestionsWrapper}>
                <Grid container spacing={2}>
                  {movieSuggestionsData && movieSuggestionsData.map((movie: IMoviesListItem) => (
                    <MovieItem key={movie.id} {...movie} />
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