import React from "react";

const ReviewCard = ({ review }) => {
  const {
    name,
    surname,
    vote,
    text,
    check_in_date,
    stay_duration,
    review_date,
  } = review;

  return (
    <div className="border rounded-lg p-4 shadow-lg mb-4">
      <h4 className="font-bold text-lg">
        {name} {surname}
      </h4>
      <p className="text-gray-700 mb-2">
        <strong>Vote:</strong> {vote} ❤️
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Check-in Date:</strong> {check_in_date}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Stay Duration:</strong> {stay_duration} days
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Review Date:</strong> {review_date}
      </p>
      <p className="text-gray-700">{text}</p>
    </div>
  );
};

export default ReviewCard;
