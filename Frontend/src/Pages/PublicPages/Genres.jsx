import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Star } from "lucide-react";

import GenreCard from "../../Components/Genres/GenreCard";

import { getGenres, getMoviesByGenre } from "../../Utils/movieService";

const Genres = () => {
  const [searchParams] = useSearchParams();

  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [movies, setMovies] = useState([]);
  const [loadingGenres, setLoadingGenres] = useState(true);
  const [loadingMovies, setLoadingMovies] = useState(true);

  /* ---------------- Load Genres ---------------- */

  useEffect(() => {
    const loadGenres = async () => {
      setLoadingGenres(true);

      const data = await getGenres();

      setGenres(data);

      const initialGenre = searchParams.get("genre") || data[0] || "";

      setSelectedGenre(initialGenre);

      setLoadingGenres(false);
    };

    loadGenres();
  }, []);

  /* ---------------- URL changes ---------------- */

  useEffect(() => {
    const genre = searchParams.get("genre");

    if (genre) {
      setSelectedGenre(genre);
    }
  }, [searchParams]);

  /* ---------------- Load Movies ---------------- */

  useEffect(() => {
    if (!selectedGenre) return;

    const loadMovies = async () => {
      setLoadingMovies(true);

      const data = await getMoviesByGenre(selectedGenre);

      setMovies(data);

      setLoadingMovies(false);
    };

    loadMovies();
  }, [selectedGenre]);

  return (
    <div className="min-h-screen bg-[#0b1120] px-8 py-5 text-white">
      <h1 className="text-3xl font-bold">Browse Genres</h1>

      <p className="mt-3 text-slate-400">Explore movies by category.</p>

      {/* ---------------- Genres ---------------- */}

      {loadingGenres ? (
        <p className="mt-2 text-slate-400">Loading genres...</p>
      ) : (
        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {genres.map((genre) => (
            <GenreCard
              key={genre}
              genre={genre}
              count={null}
              active={genre === selectedGenre}
              onClick={() => setSelectedGenre(genre)}
            />
          ))}
        </div>
      )}

      {/* ---------------- Movies ---------------- */}

      <h2 className="mt-10 text-3xl font-bold">{selectedGenre} Movies</h2>

      {loadingMovies ? (
        <p className="mt-8 text-slate-400">Loading movies...</p>
      ) : movies.length === 0 ? (
        <p className="mt-8 text-slate-400">No movies found.</p>
      ) : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {movies.map((movie) => (
            <Link
              key={movie.id}
              to={`/movies/${movie.id}`}
              className="overflow-hidden rounded-xl bg-[#192554] transition hover:-translate-y-2"
            >
              <img
                src={movie.image}
                alt={movie.title}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/500x750?text=No+Image";
                }}
                className="h-80 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold">{movie.title}</h3>

                <p className="text-sm text-slate-400">{movie.year}</p>

                <div className="mt-2 flex items-center gap-1 text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <span>{movie.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Genres;
