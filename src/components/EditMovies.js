import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EditMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        setTitle(data.title);
        setDescription(data.description);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedMovie = { title, description };

    const configObj = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedMovie),
    };

    fetch(`http://localhost:3000/movies/${id}`, configObj)
      .then((response) => response.json())
      .then((data) => {
        console.log('Movie updated:', data);
      });
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Update Movie</button>
      </form>
    </div>
  );
}

export default EditMovie;
