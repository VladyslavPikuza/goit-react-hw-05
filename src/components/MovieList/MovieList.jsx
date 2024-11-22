import { Link, useLocation } from 'react-router-dom';


const MovieList = ({ movies }) => {
  const location = useLocation(); 

  return (
    <ul>
      {movies.map(({ id, title,}) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <p>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
