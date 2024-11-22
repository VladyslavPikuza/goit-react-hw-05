import { useEffect, useState } from 'react';
import { getMovieReviews } from '../tmdbApi';

const MovieReviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h4>{author}</h4>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;
