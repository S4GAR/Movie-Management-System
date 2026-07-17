import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Genres from "../Pages/PublicPages/Genres.jsx";

const SearchMenu = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <div
      className="
fixed
top-0
left-0
h-screen
w-80
bg-[#111827]/95
backdrop-blur-md
text-white
shadow-2xl
z-50
border-r
border-slate-700
pt-6
px-6
pb-6
"
    >
      <div className="mb-8">
        {/* Sidebar header */}
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={() => {
              navigate("/");
              onClose();
            }}
            className="text-2xl font-bold cursor-pointer"
          >
            Logo
          </button>

          <button
            onClick={onClose}
            className="text-2xl text-slate-400 hover:text-white transition"
          >
            ✕
          </button>
        </div>

        {/* Browse section */}
        <h2 className="text-2xl font-bold">Browse</h2>

        <p className="text-sm text-slate-400">
          Discover your next favorite movie
        </p>
      </div>
      {/* Search */}
      <div className="flex items-center rounded-xl bg-slate-800 px-4 py-3">
        <Search className="text-slate-400" size={18} />

        <input
          placeholder="Search movies..."
          className="ml-3 w-full bg-transparent outline-none placeholder:text-slate-500"
        />
      </div>

      {/* Genres */}

      <button
        onClick={() => {
          navigate("/genres");
          onClose();
        }}
        className="mt-8 mb-4 text-left text-lg font-semibold tracking-wide text-slate-300 hover:text-white transition cursor-pointer"
      >
        Genres
      </button>
      <div
        className="
        mt-3
        grid
        grid-cols-3
        gap-3
      "
      >
        {Genres.map((genre) => (
          <button
            key={genre}
            className="
            rounded-full
            bg-slate-800
            px-4
            py-2
            text-sm
            font-medium
            hover:bg-blue-600
            transition
            duration-200
            "
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Other links */}

      <div className="mt-10 space-y-2">
        <button className="w-full rounded-lg px-4 py-3 text-xl text-left hover:bg-slate-800 transition">
          Now Showing
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-xl text-left hover:bg-slate-800 transition">
          Upcoming Movies
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-xl text-left hover:bg-slate-800 transition">
          Top Rated
        </button>
      </div>
    </div>
  );
};

export default SearchMenu;
