import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { IMoviesListItem } from '../../../models/movie.model';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import StarIcon from '@mui/icons-material/Star';
import { Colors } from '../../../styles/Styles';
import { Link as RouterLink } from 'react-router-dom';

const classes = {
  card : {
    bgcolor: 'secondary.main', 
    height: '100%' 
  }, 
  default_card_media: {
    height: '430px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bgcolor: Colors.card_bg_color
  },
  rocket_icon: { 
    height: "20%",
    width: "20%",
    color: Colors.card_icon_color
  },
  card_title : { 
    color: 'primary', 
    fontSize: '1.1rem', 
    fontWeight: '500' 
  },
  card_rating_number : { 
    color: 'primary.light', 
    fontSize: '1.1rem', 
    fontWeight: '500', 
    ml: '10px' 
  }
}

const MovieItem: React.FC<IMoviesListItem> = (props) => {
  const { medium_cover_image, large_cover_image, title_long, rating, genres, id, slug } = props;
  const [ imageBroken, setImageBroken ] = useState<boolean>(false);

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card 
        sx={classes.card}
      >
          <CardActionArea component={RouterLink} to={`/movies/${id}/details/${slug}`}>
            { !imageBroken ? 
              <CardMedia
                sx={{ height: '430px'}}
                component="img"
                image={ medium_cover_image || large_cover_image }
                title={title_long}
                onError={() => setImageBroken(true)}
              /> : 
              <CardMedia
                component="div"
                sx={classes.default_card_media}
              >
                <RocketLaunchIcon sx={classes.rocket_icon} fontSize="large"/>
              </CardMedia>
            }
          </CardActionArea>
          <CardContent sx={{ height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={classes.card_title}>{title_long}</Typography>
              {rating !== 0 &&
                <Box sx={{ display: 'flex', pl: '10px' }}>
                  <StarIcon sx={{ color: Colors.rating_color }} />
                  <Typography sx={classes.card_rating_number}>{rating}</Typography>
                </Box>
              }
            </Box>
            <Box sx={{ display: "flex", flexWrap: 'wrap', pt: '5px' }}>
                <Typography variant="body1" sx={{ color: "primary.dark", fontSize: "0.9rem", mr: '4px' }}> { genres.join(', ') }</Typography>
            </Box>
              
          </CardContent>
      </Card>
    </Grid>
  )
}

export default MovieItem