import { Box, Typography } from "@mui/material";
import React from "react";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const classes = {
  notFoundWrapper: { 
    pt: '60px', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%' 
  },
  notFoundIcon: { 
    color: 'primary.light',
    width: '10%', 
    height: 'auto',
    minWidth: '65px'
  },
  notFoundErrorCode: { 
    color: 'primary.light',
    fontSize: {xs: '2rem', sm: '2.5rem', md: '3rem' }
  },
  notFoundText: { 
    pl: '10px',
    color: 'primary.light',
    fontSize: {xs: '1rem', sm: '1.2rem', md: '1.6rem' }
  }
}

const PageNotFound: React.FC = () => {
  return (
    <Box sx={ classes.notFoundWrapper }>
      <ErrorOutlineIcon sx={ classes.notFoundIcon }/>
        <Typography component="span" sx={ classes.notFoundErrorCode }>
          404 ERROR
        </Typography>
        <Typography component="span" sx={ classes.notFoundText }>
          Page Not Found
        </Typography>
    </Box>
  )
}

export default PageNotFound;
