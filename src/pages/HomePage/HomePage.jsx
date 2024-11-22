import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../components/tmdbApi';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return <MovieList movies={movies} />;
};

export default HomePage;
