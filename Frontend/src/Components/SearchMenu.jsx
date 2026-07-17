import {
  Search,
  Film,
  Clapperboard,
  Flame,
  Calendar,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getGenres } from "../Utils/movieService";

const SearchMenu = ({ onClose }) => {
  const navigate = useNavigate();

  const [genres, setGenres] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadGenres = async () => {
      const data = await getGenres();
      setGenres(data);
    };

    loadGenres();
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-80 overflow-y-auto border-r border-slate-700 bg-[#111827]/95 px-6 py-6 text-white shadow-2xl backdrop-blur-md">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => {
              navigate("/");
              onClose();
            }}
            className="text-2xl font-bold"
          >
            HamroMovie
          </button>

          <button
            onClick={onClose}
            className="text-2xl text-slate-400 transition hover:text-white"
          >
            ✕
          </button>
        </div>

        <h2 className="text-2xl font-bold">Browse</h2>

        <p className="mt-1 text-sm text-slate-400">
          Discover your next favorite movie
        </p>
      </div>

      {/* Search */}
      <div className="flex items-center rounded-xl bg-slate-800 px-4 py-3">
        <Search size={18} className="text-slate-400" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search movies..."
          className="ml-3 w-full bg-transparent outline-none placeholder:text-slate-500"
        />
      </div>

      {/* Navigation */}
      <div className="mt-8">
        <h3 className="mb-3 text-lg font-semibold text-slate-300">
          Navigation
        </h3>

        <div className="space-y-2">
          <button
            onClick={() => {
              navigate("/movies");
              onClose();
            }}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-800"
          >
            <Film size={20} />
            Movies
          </button>

          <button
            onClick={() => {
              navigate("/genres");
              onClose();
            }}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-800"
          >
            <Clapperboard size={20} />
            Genres
          </button>

          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-800">
            <Flame size={20} />
            Trending
          </button>

          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-800">
            <Star size={20} />
            Top Rated
          </button>

          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-800">
            <Calendar size={20} />
            Upcoming
          </button>
        </div>
      </div>

      {/* Genres */}
      <div className="mt-8 flex-1 overflow-y-auto pr-2">
        <h3 className="mb-4 text-lg font-semibold text-slate-300">
          Popular Genres
        </h3>

        <div className="flex flex-wrap gap-2">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => {
                navigate(`/genres?genre=${genre}`);
                onClose();
              }}
              className="rounded-full bg-slate-800 px-4 py-2 text-sm transition hover:bg-amber-500 hover:text-black"
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-700 pt-6">
        <p className="text-center text-xs text-slate-500">HamroMovie © 2025</p>
      </div>
    </div>
  );
};

export default SearchMenu;
