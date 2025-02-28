import { useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router-dom";

const CardDetails = ({ bnbId }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    description,
    beds,
    rooms,
    restrooms,
    square_meters,
    city,
    address,
    likes,
    host_name,
    host_surname,
    host_email,
    host_phone,
    thumbnail,
    reviews,
    handleFilter,
  } = bnbId;

  return (
    <div className="relative">
      <Link
        className="absolute top-4 left-4 bg-stone-400 text-white px-4 py-2 rounded cursor-pointer z-10"
        to={-1}
        onClick={handleFilter}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
          />
        </svg>
      </Link>
      <div className="flex justify-center items-center mt-10">
        <img
          src={thumbnail}
          alt="Thumbnail"
          className="w-1/2 h-auto object-cover rounded-lg"
        />
        <div className="p-4 w-1/2 h-full flex flex-col justify-between">
          <h2 className="text-2xl font-bold mb-2">{description}</h2>
          <div className="flex flex-col">
            <p className="text-gray-700 mb-2">
              <strong>Città:</strong> {city}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Indirizzo:</strong> {address}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Letti:</strong> {beds}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Camere:</strong> {rooms}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Bagni:</strong> {restrooms}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Metri Quadrati:</strong> {square_meters}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Likes:</strong> {likes} ❤️
            </p>
            <h3 className="text-xl font-bold mt-5">Dettagli Host</h3>
            <div className="flex flex-col">
              <p className="text-gray-700 mb-2">
                <strong>Nome Completo:</strong> {host_name} {host_surname}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> {host_email}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Telefono:</strong> {host_phone}
              </p>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold mt-10 mb-5">Recensioni</h3>
      <div className="flex gap-4">
        {reviews?.length > 0 ? (
          reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))
        ) : (
          <p className="text-gray-700">Nessuna recensione disponibile</p>
        )}
      </div>
    </div>
  );
};

export default CardDetails;
