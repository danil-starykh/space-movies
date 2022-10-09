import { Box, Typography } from "@mui/material";
import React from "react";
import AnnouncementIcon from '@mui/icons-material/Announcement';

type ErrorBoundaryState = {
  hasError: boolean;
};

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

const classes = {
  errorWrapper: { 
    pt: '60px', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%' 
  },
  errorIcon: { 
    color: 'primary.light',
    width: '10%', 
    height: '10%'
  },
  errorText: { 
    color: 'primary.light',
    fontSize: {xs: '1rem', sm: '1.5rem', md: '2rem' }
  }
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={ classes.errorWrapper }>
          <AnnouncementIcon sx={ classes.errorIcon }/>
          <Typography component="span" sx={ classes.errorText }>
            Something went wrong...
          </Typography>
        </Box>
      );
    }
    return this.props.children; 
  }
}

export default ErrorBoundary;