import { Link } from 'react-router-dom';
import { getImageUrl } from '../tmdbApi';

const MovieList = ({ movies }) => (
  <ul>
    {movies.map(({ id, title, poster_path }) => (
      <li key={id}>
        <Link to={`/movies/${id}`}>
          <img src={getImageUrl(poster_path)} alt={title} width="150" />
          <p>{title}</p>
        </Link>
      </li>
    ))}
  </ul>
);

export default MovieList;
