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
    <div className="border rounded-lg p-4 shadow-lg mb-4 w-full md:w-1/4">
      <h4 className="font-bold text-lg">
        {name} {surname}
      </h4>
      <div className="flex items-center text-gray-700 mb-1">
        <strong>Vote:</strong> {vote}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-6 text-yellow-500 ml-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      </div>
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
