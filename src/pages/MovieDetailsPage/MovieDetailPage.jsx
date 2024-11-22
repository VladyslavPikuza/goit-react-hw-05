import { useEffect, useState } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { getMovieDetails, getImageUrl } from '../../components/tmdbApi';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return null;

  return (
    <div>
      <img src={getImageUrl(movie.poster_path)} alt={movie.title} width="200" />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
