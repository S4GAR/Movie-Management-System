import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import Home from "../src/Pages/PublicPages/Homepage.jsx";
import About from "../src/Pages/PublicPages/About.jsx";
import Movies from "../src/Pages/PublicPages/Movies.jsx";
const Footer = () => {
  return (
    <footer className="bg-[#111827] text-slate-300 px-8 py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 ">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white">Logo</h2>

          <p className="mt-4 text-sm text-slate-400">
            Your ultimate destination for discovering movies, exploring genres,
            and finding your next favorite film.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>

          <ul className="space-y-2">
            <li className="hover:text-blue-400">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link to="/movies">Movies</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>

          <ul className="space-y-2 text-sm">
            <li>📍 Manglabare, Morang</li>
            <li>📧 support@moviewebsite.com</li>
            <li>📞 +977 9800000000</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>

          <div className="flex gap-4">
            <FaInstagram
              onClick={() =>
                window.open("https://instagram.com/might_be_sagar", "_blank")
              }
              size={24}
              className="cursor-pointer hover:text-pink-400"
            />

            <FaYoutube
              onClick={() =>
                window.open("https://youtube.com/watch?v=jNQXAC9IVRw", "_blank")
              }
              size={24}
              className="cursor-pointer hover:text-red-500"
            />

            <FaFacebook
              onClick={() => window.open("https://facebook.com", "_blank")}
              size={24}
              className="cursor-pointer hover:text-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
        © 2026 Movie Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
