import { Star } from "lucide-react";

const Rating = ({ rating, setRating }) => {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-3">Rate this movie</h2>

      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={32}
            onClick={() => setRating(star)}
            className={`
              cursor-pointer
              ${star <= rating ? "text-yellow-400" : "text-gray-500"}
            `}
            fill={star <= rating ? "currentColor" : "none"}
          />
        ))}
      </div>

      {rating > 0 && (
        <p className="mt-2 text-slate-400">You rated this movie {rating}/5</p>
      )}
    </div>
  );
};

export default Rating;
