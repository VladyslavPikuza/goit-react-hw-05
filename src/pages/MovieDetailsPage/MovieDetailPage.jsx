import { useEffect, useState } from 'react';
import { Link, useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { getMovieDetails, getImageUrl } from '../../components/tmdbApi';
import s from './MovieDetailPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const backLink = location.state?.from || '/movies';

  useEffect(() => {
    if (!movieId) return;

    getMovieDetails(movieId)
      .then(setMovie)
      .catch((error) => console.error(error));
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  const { title, overview, genres, vote_average, poster_path, release_date } = movie;

  return (
    <div>
      <button
        type="button"
        onClick={() => navigate(backLink)}
        className={s.button}>
        &#129044; Go back
      </button>

  <div className={s.poster}>
  <img src={getImageUrl(poster_path)} alt={title} />
  <div>
    <h1 className={s.title}>
      {title} {release_date ? `(${new Date(release_date).getFullYear()})` : ''}
    </h1>
    <p className={s.score}>
      <strong>User Score:</strong> {Math.round(vote_average * 10)}%
    </p>
    <p className={s.overview}>
      <strong>Overview:</strong> {overview || 'No overview available.'}
    </p>
    <p className={s.genres}>
      <strong>Genres:</strong>{' '}
      {genres && genres.length > 0
        ? genres.map((genre) => genre.name).join(', ')
        : 'No genres available.'}
    </p>
  
  </div>
</div>
      <div className={s.link}>
      <p className={s.info}>Additional information</p>
      <Link to="cast" state={{ from: backLink }} style={{ marginRight: '10px' }}>
        Cast
      </Link>
      <Link to="reviews" state={{ from: backLink }}>
        Reviews
            </Link>
            <Outlet />
    </div>
    </div>
    
  );
};

export default MovieDetailsPage;
