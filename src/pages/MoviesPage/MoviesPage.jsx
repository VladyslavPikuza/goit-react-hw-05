import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { searchMovies } from '../../components/tmdbApi';
import MovieList from '../../components/MovieList/MovieList';
import s from './MoviesPage.module.css';


const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const urlQuery = searchParams.get('query') || '';

  useEffect(() => {
    if (!location.state?.fromSearch) {
      setQuery('');
    }

    if (urlQuery) {
      searchMovies(urlQuery).then(setMovies);
    }
  }, [urlQuery, location.state]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.query.value.trim();
    if (!searchQuery) return;

    setSearchParams({ query: searchQuery });
    setQuery(searchQuery);
    searchMovies(searchQuery).then(setMovies);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          className={s.input}
          type="text"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
        />
        <button className={s.button} type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;

