import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast, getImageUrl } from '../tmdbApi';


const MovieCast = () => {
  const { movieId } = useParams(); 
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) {
      setError('Movie ID is missing.');
      return;
    }

    getMovieCast(movieId)
      .then(setCast)
      .catch((err) => setError(err.message));
  }, [movieId]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <ul>
      {cast.length === 0 ? (
        <p>No cast information available.</p>
      ) : (
        cast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            {profile_path ? (
              <img src={getImageUrl(profile_path)} alt={name} width="100" />
            ) : (
              <p>No image available</p>
            )}
            <p>
              <strong>{name}</strong> as {character}
            </p>
          </li>
        ))
      )}
    </ul>
  );
};

export default MovieCast;
