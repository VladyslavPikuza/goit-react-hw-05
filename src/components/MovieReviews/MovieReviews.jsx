import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../tmdbApi';

const MovieReviews = () => {
  const { movieId } = useParams(); 
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) {
      setError('Movie ID is missing.');
      return;
    }

    getMovieReviews(movieId)
      .then(setReviews)
      .catch((err) => setError(err.message));
  }, [movieId]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <ul>
      {reviews.length === 0 ? (
        <p>No reviews available.</p>
      ) : (
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h4>{author}</h4>
            <p>{content}</p>
          </li>
        ))
      )}
    </ul>
  );
};

export default MovieReviews;
