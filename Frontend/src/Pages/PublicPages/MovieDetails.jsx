import { useParams } from "react-router-dom";
import movies from "../../data/movie.js";
import { Star } from "lucide-react";
import ReviewSection from "../../components/ReviewSection";
import Rating from "../../components/Rating";
import ReviewFill from "../../Components/ReviewFill.jsx";
import { useState, useEffect } from "react";

const MovieDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    if (window.location.hash === "#reviews") {
      setTimeout(() => {
        document.getElementById("reviews")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [id]);

  const movie = movies.find((movie) => movie.id === Number(id));

  const [reviews, setReviews] = useState(movie.reviews || []);

  const [userRating, setUserRating] = useState(0);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!movie) {
    return (
      <div className="min-h-screen bg-[#0b1120] text-white p-20">
        Movie not found
      </div>
    );
  }

  const handleReviewSubmit = (comment) => {
    const newReview = {
      id: Date.now(),
      username: "You",
      rating: userRating,
      comment,
    };

    setReviews([newReview, ...reviews]);
  };

  return (
    <div className="min-h-screen bg-[#0b1120] text-white">
      <div
        className="relative h-[700px] bg-cover"
        style={{
          backgroundImage: `url(${movie.backdrop})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-black/40 to-black/20 backdrop-blur-[1px]" />
      </div>
      <div className="relative -mt-130 px-8 pb-16">
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={movie.image}
            alt={movie.title}
            onError={(e) => {
              e.currentTarget.src =
                "https://via.placeholder.com/500x750?text=No+Image";
            }}
            className="w-72 rounded-xl shadow-2xl border-4 border-white/10"
          />

          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white">{movie.title}</h1>

            <div className="mt-4 flex items-center gap-2 text-amber-400">
              <Star fill="currentColor" size={20} />
              <span className="text-lg font-medium">{movie.rating}/10</span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-y-3 text-slate-200">
              <p>
                <span className="font-semibold text-white">Year:</span>{" "}
                {movie.year}
              </p>

              <p>
                <span className="font-semibold text-white">Genre:</span>{" "}
                {movie.genre}
              </p>

              <p>
                <span className="font-semibold text-white">Director:</span>{" "}
                {movie.director}
              </p>

              <p>
                <span className="font-semibold text-white">Duration:</span>{" "}
                {movie.duration}
              </p>

              <p>
                <span className="font-semibold text-white">Language:</span>{" "}
                {movie.language}
              </p>
            </div>

            <p className="mt-8 text-lg leading-8 text-slate-100">
              {movie.description}
            </p>
          </div>
        </div>
      </div>

      <div id="reviews" className="scroll-mt-24 ml-10 mt-20 max-w-4xl">
        <Rating rating={userRating} setRating={setUserRating} />

        <ReviewFill
          isLoggedIn={false}
          rating={userRating}
          onSubmit={handleReviewSubmit}
        />

        <ReviewSection reviews={reviews} />
      </div>
    </div>
  );
};

export default MovieDetails;
