import React from "react";

const UserReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Ayesha Rahman",
      img: "https://i.pravatar.cc/150?img=47",
      rating: 5,
      review:
        "Absolutely loved the quality! The design and fabric are even better than I expected. Will definitely order again!",
    },
    {
      id: 2,
      name: "Nusrat Jahan",
      img: "https://i.pravatar.cc/150?img=31",
      rating: 4,
      review:
        "Great experience overall. The color was slightly different but still very beautiful. Fast delivery too!",
    },
    {
      id: 3,
      name: "Mithila Hasan",
      img: "https://i.pravatar.cc/150?img=56",
      rating: 5,
      review:
        "Super comfortable material and excellent stitching quality. Looks elegant and classy!",
    },
    {
      id: 4,
      name: "Tania Karim",
      img: "https://i.pravatar.cc/150?img=12",
      rating: 4,
      review:
        "Customer service was really helpful and polite. I’m happy with my purchase and would recommend it to others.",
    },
  ];

  return (
    <div className="py-16 bg-base-100">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 mt-2">
          Real experiences from happy shoppers 💬
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 md:px-10">
        {reviews.map((user) => (
          <div
            key={user.id}
            className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="card-body items-center text-center">
              <img
                src={user.img}
                alt={user.name}
                className="w-20 h-20 rounded-full border-4 border-primary mb-4"
              />
              <h3 className="font-semibold text-lg">{user.name}</h3>

              {/* Rating */}
              <div className="rating my-2">
                {[...Array(5)].map((_, i) => (
                  <input
                    key={i}
                    type="radio"
                    name={`rating-${user.id}`}
                    className="mask mask-star-2 bg-yellow-400"
                    checked={i < user.rating}
                    readOnly
                  />
                ))}
              </div>

              <p className="text-sm text-gray-600">{user.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReviews;
