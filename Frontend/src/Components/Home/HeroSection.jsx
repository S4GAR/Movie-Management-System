import { Play, Info, Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import movie from "../../data/movie";
// import featuredMovie from "../../data/featuredMovie";

const HeroSection = () => {
  const navigate = useNavigate();
  const featuredMovies = [
    movie[0], // Interstellar
    movie[1], // Inception
    movie[2], // The Dark Knight
    movie[4], // Avengers: Endgame
  ];

  const [current, setCurrent] = useState(0);
  const featuredMovie = featuredMovies[current];
  const intervalRef = useRef(null);
  const startAutoSlide = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featuredMovies.length);
    }, 6000);
  };

  useEffect(() => {
    startAutoSlide();

    return () => clearInterval(intervalRef.current);
  }, []);

  const nextMovie = () => {
    setCurrent((prev) => (prev + 1) % featuredMovies.length);
    startAutoSlide();
  };

  const prevMovie = () => {
    setCurrent((prev) => (prev === 0 ? featuredMovies.length - 1 : prev - 1));
    startAutoSlide();
  };

  return (
    <section className="relative h-[80vh] overflow-hidden">
      <button
        onClick={prevMovie}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/40 p-3 hover:bg-black/60 transition"
      >
        <ChevronLeft size={30} className="text-white" />
      </button>

      <button
        onClick={nextMovie}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/40 p-3 hover:bg-black/60 transition"
      >
        <ChevronRight size={30} className="text-white" />
      </button>
      {/* Banner */}
      <div
        key={featuredMovie.id}
        className="absolute inset-0 animate-fade"
      ></div>
      <img
        src={featuredMovie.backdrop}
        alt={featuredMovie.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#192554] via-[#192554]/90 to-transparent" />

      {/* Bottom Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#192554] via-transparent to-transparent" />

      <div className="relative mx-auto flex h-full max-w-7xl items-center justify-between px-8">
        {/* Left */}
        <div className="max-w-2xl text-white">
          <div className="mb-5 flex items-center gap-4">
            <div className="flex items-center gap-1 rounded-full bg-yellow-500 px-3 py-1 text-black font-semibold">
              <Star size={16} fill="currentColor" />
              {featuredMovie.rating}
            </div>

            <span>{featuredMovie.year}</span>

            <span>•</span>

            <span>{featuredMovie.duration}</span>
          </div>

          <h1 className="text-6xl font-black uppercase leading-tight">
            {featuredMovie.title}
          </h1>

          <div className="mt-6 flex gap-3">
            {featuredMovie.genre.split(", ").map((genre) => (
              <span key={genre} className="rounded-full bg-[#232f6d] px-4 py-1">
                {genre}
              </span>
            ))}
          </div>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
            {featuredMovie.description}
          </p>

          <div className="mt-10 flex gap-5">
            <button
              onClick={() => navigate(`/movies/${featuredMovie.id}#reviews`)}
              className="flex items-center gap-2 rounded-lg bg-red-600 px-7 py-4 font-semibold transition hover:bg-red-700"
            >
              <Star size={18} fill="white" />
              Rate Movie
            </button>

            <button
              onClick={() => navigate(`/movies/${featuredMovie.id}`)}
              className="flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 py-4 backdrop-blur hover:bg-white/20"
            >
              <Info size={18} />
              Details
            </button>
          </div>
        </div>

        {/* Poster */}

        <div className="hidden lg:block">
          <img
            src={featuredMovie.image}
            alt={featuredMovie.title}
            className="w-72 rounded-2xl shadow-2xl ring-4 ring-white/10"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
