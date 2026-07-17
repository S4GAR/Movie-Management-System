import movies from "../data/movie";

export const getMovies = async () => movies;

export const getMovieById = async (id) =>
  movies.find((movie) => movie.id === Number(id));

export const getFeaturedMovies = async () => movies.slice(0, 5);

export const getGenres = async () => {
  const genres = new Set();

  movies.forEach((movie) => {
    movie.genre.split(",").forEach((genre) => {
      genres.add(genre.trim());
    });
  });

  return [...genres];
};

export const getMoviesByGenre = async (genre) => {
  return movies.filter((movie) =>
    movie.genre
      .split(",")
      .map((g) => g.trim())
      .includes(genre),
  );
};
