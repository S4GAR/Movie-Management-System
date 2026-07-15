import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReviewFill = ({ isLoggedIn, rating, onSubmit }) => {
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("button clicked");

    if (!isLoggedIn) {
      navigate("/login", {
        state: {
          message: "You have to be logged in to write reviews.",
        },
      });
      return;
    }

    if (comment.trim() === "" || rating === 0) {
      console.log("Missing comment or rating");
      return;
    }

    console.log("Submitting");
    onSubmit(comment);
    setComment("");
  };

  return (
    <div className="mt-8">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your review..."
        className="w-full bg-[#192554] rounded-xl p-4"
      />
      <button
        onClick={handleSubmit}
        className=" cursor-pointer mt-4 bg-blue-600 px-6 py-2 rounded-lg"
      >
        Submit Review
      </button>
    </div>
  );
};

export default ReviewFill;
