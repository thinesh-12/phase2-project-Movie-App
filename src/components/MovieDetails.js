import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <h1 className="movie-details-title">Movie Details</h1>
      <h2 className="movie-details-title">{movie.title}</h2>
      <p className="movie-details-description">{movie.description}</p>
      <p className="movie-details-genre">{movie.genre}</p>
    </div>
  );
}

export default MovieDetails;
