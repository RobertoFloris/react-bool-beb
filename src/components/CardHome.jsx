import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

const CardHome = ({ bnb }) => {
  const { id, description, likes } = bnb;

  const { fetchLikes } = useGlobalContext();

  const likeHandler = () => {
    fetchLikes(id);
  };

  return (
    <div className="flex flex-col w-64 m-2 border rounded-lg overflow-hidden shadow-lg relative">
      <img className="w-full h-48 object-cover" />
      <div className="absolute top-2 right-2">
        <button
          className="text-red-500 hover:text-red-700 bg-white p-2 rounded-full"
          onClick={likeHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </div>
      <div className="flex-grow p-4">
        <h3 className="font-bold">{description}</h3>
        <p className="text-gray-500">{likes} ❤️</p>
      </div>
      <div className="flex justify-between p-2">
        <Link
          to="/CardDetails"
          className="bg-blue-500 text-white rounded-lg px-2 py-1"
        >
          Dettagli
        </Link>
      </div>
    </div>
  );
};

export default CardHome;
