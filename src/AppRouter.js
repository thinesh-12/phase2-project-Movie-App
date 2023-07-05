import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import NewMovie from './components/NewMovie';
import MovieDetails from './components/MovieDetails';
import EditMovie from './components/EditMovie';

function AppRouter() {
  return (
    <div className="app-router" style={{ background: 'linear-gradient(to right, #FF8C00, #FF0080)' }}>
      <nav>
        <ul>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/movies/new">Add New Movie</Link>
          </li>
          <li>
          <Link to="/movies/:id/edit">Edit Movie</Link>
          </li>
          </ul>
      </nav>

      <Routes>
        <Route path="/movies/new" element={<NewMovie />} />
        <Route path="/movies/:id/edit" element={<EditMovie />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default AppRouter;