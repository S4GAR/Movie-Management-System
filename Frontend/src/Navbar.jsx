import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchMenu from "./Components/SearchMenu";

const Navbar = ({ username, openMenu, setOpenMenu }) => {
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  console.log(username);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 z-50 flex h-20 w-full items-center justify-between bg-[#232f6d] px-6 shadow-md relative">
      <div className="flex items-center gap-10 text-2xl">
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="cursor-pointer"
        >
          ☰
        </button>

        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <h1 className="text-3xl cursor-pointer">Logo</h1>
        </button>

        {openMenu && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/50"
              onClick={() => setOpenMenu(false)}
            />

            <SearchMenu onClose={() => setOpenMenu(false)} />
          </>
        )}
      </div>
      <ul className="absolute left-1/2 flex -translate-x-1/2 gap-5">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/movies">Movies</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About Us</Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li> */}
        <li className="nav-item" title="IMDb Top 50 Movies">
          <a
            href="https://www.imdb.com/chart/top/"
            target="_blank"
            rel="noopener noreferrer"
          >
            IMDB
          </a>
        </li>
      </ul>
      <div className="flex gap-2">
        <button
          onClick={() => navigate("/login")}
          className="cursor-pointer rounded-lg border border-amber-500 px-5 py-2 font-medium text-amber-400 hover:bg-amber-500/20 transition-colors duration-100"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/register")}
          className="cursor-pointer rounded-lg bg-amber-500 px-5 py-2 font-medium text-slate-900 transition-colors duration-200 hover:bg-amber-400 hover:shadow-lg"
        >
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
