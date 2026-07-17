import React from "react";

const GenreCard = ({ genre, count, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl p-6 transition-all duration-300 border
            ${
              active
                ? "bg-amber-500 text-black border-amber-400"
                : "bg-[#192554] text-white border-transparent hover:border-amber-400 hover:-translate-y-1"
            }`}
    >
      <h2 className="text-2xl font-bold">{genre}</h2>

      {count !== null && (
        <p className="text-sm text-slate-400">{count} Movies</p>
      )}  
    </button>
  );
};

export default GenreCard;
