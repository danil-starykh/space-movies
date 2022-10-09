import React from 'react';
import MovieList from '../Movie/MovieList/MovieList';
import { Routes, Route } from 'react-router-dom';
import MovieDetails from '../Movie/MovieDetails/MovieDetails';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import PageNotFound from '../PageNotFound/PageNotFound';

const MainContent: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ErrorBoundary><MovieList /></ErrorBoundary>}/>
        <Route path="/movies-list" element={<ErrorBoundary><MovieList /></ErrorBoundary>}/>
        <Route path="/movies/:movieId/details/:movieTitle" element={<ErrorBoundary><MovieDetails /></ErrorBoundary>}/>
        <Route path="*" element={<ErrorBoundary><PageNotFound /></ErrorBoundary>}/>
      </Routes>
    </>
    
  )
}

export default MainContent