import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovies } from "../../Utils/movieService";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await getMovies();
      setMovies(data);
    };

    loadMovies();
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1120] px-8 py-24 text-white">
      <h1 className="mb-10 text-4xl font-bold">Movies</h1>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {movies.map((movie) => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            className="overflow-hidden rounded-xl bg-[#192554] shadow-lg transition hover:-translate-y-2"
          >
            <img
              src={movie.image}
              alt={movie.title}
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/500x750?text=No+Image";
              }}
              className="w-72 rounded-xl"
            />

            <div className="p-4">
              <h2 className="font-semibold">{movie.title}</h2>

              <p className="text-sm text-slate-400">
                {movie.year} • {movie.genre}
              </p>

              <div className="mt-2 flex items-center gap-1 text-amber-400">
                <Star size={16} fill="currentColor" />
                <span>{movie.rating}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Movies;
