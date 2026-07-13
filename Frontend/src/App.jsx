import React, { Children } from "react";
import HomeLayout from "./Layout/HomeLayout.jsx";
import Navbar from "../src/Navbar.jsx";
import Register from "./Pages/PublicPages/Register.jsx";
import LoginPage from "./Pages/PublicPages/Loginpage.jsx";
import Footer from "./Footer.jsx";
import Contact from "./Pages/PublicPages/Contact.jsx";
import About from "./Pages/PublicPages/About.jsx";
import Homepage from "./Pages/PublicPages/Homepage.jsx";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Loginpage from "./Pages/PublicPages/Loginpage.jsx";
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
          path: "/contact",
          element: <Contact />,
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
      path: "/genres",
      element: <Genres />,
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
