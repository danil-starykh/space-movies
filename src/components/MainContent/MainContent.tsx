import React from 'react';
import MovieList from '../Movie/MovieList/MovieList';
import { Routes, Route, Link } from 'react-router-dom';
import MovieDetails from '../Movie/MovieDetails/MovieDetails';

const MainContent: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList />}/>
        <Route path="/movies-list" element={<MovieList />}/>
        <Route path="/movies/:movieId/details/:movieTitle" element={<MovieDetails />}/>
        {/* <Route path="*" element={<ProblemPage />} */}
      </Routes>
    </>
    
  )
}

export default MainContent