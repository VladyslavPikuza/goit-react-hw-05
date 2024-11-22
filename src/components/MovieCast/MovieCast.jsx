import { useEffect, useState } from 'react';
import { getMovieCast } from '../tmdbApi';

const MovieCast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          <img src={getImageUrl(profile_path)} alt={name} width="100" />
          <p>{name} as {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
