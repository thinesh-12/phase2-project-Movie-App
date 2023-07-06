import React, { useEffect, useState } from 'react';

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/movies')
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <h2>All Movies</h2>
      {movies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <img src={movie.posterUrl} alt={movie.title} />
          <div className="movie-details">
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Description: {movie.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Movies;