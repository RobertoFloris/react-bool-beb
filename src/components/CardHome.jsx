import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import StarRating from "./StarRating";
import { useState } from "react";

const CardHome = ({ bnb }) => {
  const {
    id,
    guest_number,
    beds,
    restrooms,
    rooms,
    description,
    likes,
    city,
    thumbnail,
    avg_vote,
  } = bnb;
  const { fetchLikes } = useGlobalContext();
  const [animate, setAnimate] = useState(false);

  const likeHandler = () => {
    fetchLikes(id);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 500); // Remove the animation className after the animation ends
  };

  return (
    <div className="flex flex-col w-64 m-2 rounded-lg overflow-hidden shadow-lg relative bg-stone-50">
      <img src={thumbnail} className="w-full h-48 object-cover" />
      <div className="absolute top-2 right-2">
        <button
          className={`text-red-500 hover:text-red-700 bg-white p-2 rounded-full transition-transform duration-500 ease-in-out ${
            animate ? "transform scale-110 bg-red-200" : ""
          }`}
          onClick={likeHandler}
        >
          {animate ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          )}
        </button>
      </div>
      <Link to={`/${id}`} className="flex-grow px-3 pt-3">
        <h3 className="font-bold">{description}</h3>
        <p className="text-gray-500 flex my-2">
          {likes}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-red-500 ms-3"
          >
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
          </svg>
        </p>

        <div className="border-t border-gray-900/10 py-2 mt-3">
          <div className="flex py-1">
            <p>
              <i className="fa-solid fa-location-dot me-2"></i>
            </p>
            <p className="">{city}</p>
          </div>
          <div className="flex py-1">
            <p>
              <i className="fa-solid fa-users me-2"></i>
            </p>
            <p className="">{guest_number} ospiti</p>
          </div>
          <div className="flex py-1">
            <p>
              <i className="fa-solid fa-bed me-2"></i>
            </p>
            <p className="">
              {rooms} stanze - {beds} letti
            </p>
          </div>
          <div className="flex py-1">
            <p>
              <i className="fa-solid fa-shower me-2"></i>
            </p>
            <p className="">{restrooms} bagni</p>
          </div>
        </div>
      </Link>

      <div className="px-3 mb-5">
        <StarRating vote={avg_vote} />
      </div>
    </div>
  );
};

export default CardHome;
