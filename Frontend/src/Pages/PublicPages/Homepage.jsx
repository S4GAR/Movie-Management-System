import React from "react";
import { Star, Play, Film, Search, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeroSection from "../../Components/Home/HeroSection";
import { getFeaturedMovies } from "../../Utils/movieService";
import { getGenres } from "../../Utils/movieService";
import { useEffect, useState } from "react";
// import movies from "../../data/movie";

const Homepage = () => {
  const navigate = useNavigate();

  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await getFeaturedMovies();
      setTrendingMovies(data);
    };

    loadMovies();
  }, []);

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const movies = await getFeaturedMovies();
      const genres = await getGenres();

      setTrendingMovies(movies);
      setGenres(genres);
    };

    loadData();
  }, []);
  return (
    <div>
      <HeroSection />
      <section className="bg-[#192554] px-8 py-0 text-white">
        {/* Trending */}
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Trending Movies</h2>
            <button
              onClick={() => navigate("/movies")}
              className="text-amber-400 hover:text-amber-300 cursor-pointer"
            >
              View All →
            </button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-5">
            {trendingMovies.map((movie) => (
              <div
                key={movie.id}
                onClick={() => navigate(`/movies/${movie.id}`)}
                className="group cursor-pointer overflow-hidden rounded-xl bg-[#232f6d] transition hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="h-72 w-full object-cover transition group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-yellow-500 px-2 py-1 text-sm font-bold text-black">
                    <Star size={14} fill="black" />
                    {movie.rating}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{movie.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    {movie.year} • {movie.genre}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Genres */}
        <div className="mx-auto mt-24 max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold">Explore Genres</h2>
          <div className="flex flex-wrap gap-4">
            {genres.map((genre) => (
              <button
                key={genre}
                className="rounded-full bg-[#232f6d] px-6 py-3 transition hover:bg-amber-500 hover:text-black"
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
        {/* CTA */}
        <div className="mx-auto mt-24 max-w-5xl rounded-3xl bg-gradient-to-r from-[#232f6d] to-[#101735] p-10 text-center">
          <h2 className="text-4xl font-bold">Find Your Next Favorite Movie</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Discover movies, rate your favorites, and share your thoughts with
            the HamroMovie community.
          </p>
          <button className="mt-8 rounded-lg bg-amber-500 px-8 py-4 font-semibold text-black hover:bg-amber-400">
            Explore Movies
          </button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
