import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../components/tmdbApi';
import MovieList from '../../components/MovieList/MovieList';
import s from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

   return (
    <div>
      <h2 className={s.title}>Trending today</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
