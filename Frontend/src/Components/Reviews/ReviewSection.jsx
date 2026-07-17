import { Star } from "lucide-react";

const ReviewSection = ({ reviews }) => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-6">Reviews</h2>

      <div className="h-60 overflow-y-auto">
        {reviews?.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="bg-[#192554] rounded-xl p-5 mb-4">
              <div className="flex justify-between">
                <h3 className="font-semibold">{review.username}</h3>

                <div className="flex text-yellow-400">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>

              <p className="mt-3 text-slate-300">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-slate-400">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
