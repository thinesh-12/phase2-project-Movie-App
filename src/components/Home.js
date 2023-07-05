import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Welcome to Movie App</h2>
      <p>Explore the world of movies!</p>
      <ul>
        <li>
          <Link to="/movies">Browse Movies</Link>
        </li>
        <li>
          <Link to="/movies/new">Add New Movie</Link>
        </li>
        <li>
          <Link to="/movies/:id/edit">Edit Movie</Link>
        </li>
              
      </ul>
    </div>
  );
}

export default Home;
