import React, { Children } from "react";
import HomeLayout from "./Layout/HomeLayout.jsx";
import Navbar from "./Navbar.jsx";
import Register from "./Pages/PublicPages/Register.jsx";
import Loginpage from "./Pages/PublicPages/Loginpage.jsx";
import Footer from "./Footer.jsx";
import About from "./Pages/PublicPages/About.jsx";
import Homepage from "./Pages/PublicPages/Homepage.jsx";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import NotFound from "./Pages/NotFound.jsx";
import Movies from "./Pages/PublicPages/Movies.jsx";
import Genres from "./Pages/PublicPages/Genres.jsx";
import MovieDetails from "./Pages/PublicPages/MovieDetails.jsx";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "",
          element: <Homepage />,
        },
        {
          path: "/home",
          element: <Homepage />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movies",
          element: <Movies />,
        },
        {
          path: "https://www.imdb.com/chart/top/",
        },
        {
          path: "/movies/:id",
          element: <MovieDetails />,
        },
        {
          path: "/genres",
          element: <Genres />,
        },
      ],
    },
    {
      path: "/login",
      element: <Loginpage />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};

export default App;
