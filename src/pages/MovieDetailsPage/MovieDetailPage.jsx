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
    <div style={{ padding: '20px' }}>
      <button
        type="button"
        onClick={() => navigate(backLink)}
        className={s.button}>
        &#129044; Go back
      </button>

      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Постер */}
        <div>
          {poster_path && (
            <img
              src={getImageUrl(poster_path)}
              alt={title}
              width="200"
              style={{ borderRadius: '8px' }}
            />
          )}
        </div>

        {/* Основная информация */}
        <div>
          <h1>
            {title} {release_date ? `(${new Date(release_date).getFullYear()})` : ''}
          </h1>
          <p>
            <strong>User Score:</strong> {Math.round(vote_average * 10)}%
          </p>
          <p>
            <strong>Overview:</strong> {overview || 'No overview available.'}
          </p>
          <p>
            <strong>Genres:</strong>{' '}
            {genres && genres.length > 0
              ? genres.map((genre) => genre.name).join(', ')
              : 'No genres available.'}
          </p>

          {/* Ссылки на Cast и Reviews */}
          <div style={{ marginTop: '20px' }}>
            <Link to="cast" state={{ from: backLink }} style={{ marginRight: '10px' }}>
              Cast
            </Link>
            <Link to="reviews" state={{ from: backLink }}>
              Reviews
            </Link>
          </div>
        </div>
      </div>

      {/* Дочерние маршруты */}
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
