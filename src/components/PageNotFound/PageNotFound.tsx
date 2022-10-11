import { Box, Typography } from "@mui/material";
import React from "react";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { classes } from './styles';

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
