import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YThkNjFhNTM2NzI3YzI5M2ViZTllY2QwNDUxZjEzMiIsIm5iZiI6MTczMjMwNjIwNC45MjY1NDIzLCJzdWIiOiI2NzQwZTQ3ODRiMTViOGFlMzFiMDA4NmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fbARoF4J0SHDgwty53RgwfpZSK2XtlIKYIu9tPLRIkg';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/trending/movie/day`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  return data.results;
};

export const searchMovies = async (query) => {
  const { data } = await axios.get(`${BASE_URL}/search/movie`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
    params: { query, include_adult: false },
  });
  return data.results;
};

export const getMovieDetails = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  return data;
};

export const getMovieCast = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  return data.cast;
};

export const getMovieReviews = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}/reviews`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  return data.results;
};

export const getImageUrl = (path) => `${IMAGE_BASE_URL}${path}`;
