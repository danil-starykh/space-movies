import React from 'react';
import MovieList from '../Movie/MovieList/MovieList';
import { Routes, Route, Link } from 'react-router-dom';
import MovieDetails from '../Movie/MovieDetails/MovieDetails';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const MainContent: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ErrorBoundary><MovieList /></ErrorBoundary>}/>
        <Route path="/movies-list" element={<ErrorBoundary><MovieList /></ErrorBoundary>}/>
        <Route path="/movies/:movieId/details/:movieTitle" element={<ErrorBoundary><MovieDetails /></ErrorBoundary>}/>
        {/* <Route path="*" element={<ProblemPage />} */}
      </Routes>
    </>
    
  )
}

export default MainContent