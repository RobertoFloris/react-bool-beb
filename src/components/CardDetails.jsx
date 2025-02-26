import React, { useEffect } from "react";
import ReviewCard from "./ReviewCard";

const CardDetails = ({ bnbId }) => {
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
    reviews
  } = bnbId;

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <img
        src={thumbnail}
        alt="Thumbnail"
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{description}</h2>
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
      <h3 className="text-xl font-bold mt-5">Recensioni</h3>
      {reviews?.length > 0 ? (
        reviews.map((review) => <ReviewCard key={review.id} review={review} />)
      ) : (
        <p className="text-gray-700">Nessuna recensione disponibile</p>
      )}
    </div>
  );
};

export default CardDetails;
