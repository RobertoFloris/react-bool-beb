import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = ({ thumbnail, foto1, foto2 }) => {
  const allImages = [thumbnail, foto1, foto2].filter(Boolean);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full md:w-2/3">
      <img
        src={allImages[currentIndex]}
        alt="Immagine struttura"
        className="w-full h-auto object-cover rounded-lg"
      />
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black p-3 hover:opacity-70 transition"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black p-3 hover:opacity-70 transition"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
};

const CardDetails = ({ bnbId }) => {
  const api_Url = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewData, setReviewData] = useState({
    name: "",
    surname: "",
    vote: "",
    text: "",
    check_in_date: "",
    stay_duration: "",
  });

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
    images,
    reviews,
    handleFilter,
    foto1,
    foto2 } = bnbId;

  const handleInputChange = (e) => {
    setReviewData({ ...reviewData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${api_Url}/${id}/reviews`, reviewData)
      .then((response) => {
        console.log(response.data);
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error("Errore nell'invio della recensione:", error);
      });
  };

  return (
    <div className="relative">
      <Link className="static top-30 left-4 mx-10 mt-10" to={-1} onClick={handleFilter}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 bg-stone-400 text-white rounded cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
        </svg>
      </Link>
      <div className="flex flex-col md:flex-row items-center mt-10 mx-4 md:mx-20">
        <ImageSlider thumbnail={thumbnail} foto1={foto1} foto2={foto2} />
        <div className="p-4 m-5 w-full md:w-1/3 h-full flex flex-col justify-between">
          <h2 className="text-2xl font-bold mb-2">{description}</h2>
          <div className="flex flex-col">
            <p className="text-gray-700 mb-2"><strong>Città:</strong> {city}</p>
            <p className="text-gray-700 mb-2"><strong>Indirizzo:</strong> {address}</p>
            <p className="text-gray-700 mb-2"><strong>Letti:</strong> {beds}</p>
            <p className="text-gray-700 mb-2"><strong>Camere:</strong> {rooms}</p>
            <p className="text-gray-700 mb-2"><strong>Bagni:</strong> {restrooms}</p>
            <p className="text-gray-700 mb-2"><strong>Metri Quadrati:</strong> {square_meters}</p>
            <p className="text-gray-700 mb-2"><strong>Likes:</strong> {likes} ❤️</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-10 mb-3 mx-20">
        <h3 className="text-xl font-bold">Recensioni:</h3>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white p-2 rounded mt-3 mb-3"
        >
          Aggiungi una recensione
        </button>
      </div>
      <div className="flex flex-col m-10">
        {reviews?.length > 0 ? (
          reviews.map((review) => (
            <div className="m-2 w-full" key={review.id}>
              <ReviewCard review={review} />
            </div>
          ))
        ) : (
          <p className="text-gray-700">Nessuna recensione disponibile</p>
        )}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur">
          <div className="bg-white p-5 rounded shadow-lg w-1/3">
            <h2 className="text-xl mb-4">Aggiungi una recensione</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Nome"
                onChange={handleInputChange}
                required
                className="border rounded p-2 mb-2 w-full"
              />
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                onChange={handleInputChange}
                required
                className="border rounded p-2 mb-2 w-full"
              />
              <input
                type="number"
                name="vote"
                placeholder="Voto"
                onChange={handleInputChange}
                required
                className="border rounded p-2 mb-2 w-full"
              />
              <textarea
                name="text"
                placeholder="Scrivi una recensione"
                onChange={handleInputChange}
                required
                className="border rounded p-2 mb-2 w-full"
              ></textarea>
              <input
                type="date"
                name="check_in_date"
                onChange={handleInputChange}
                required
                className="border rounded p-2 mb-2 w-full"
              />
              <input
                type="number"
                name="stay_duration"
                placeholder="Quanti giorni hai alloggiato?"
                onChange={handleInputChange}
                required
                className="border rounded p-2 mb-2 w-full"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded mx-2"
              >
                Pubblica
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="bg-red-500 text-white p-2 rounded mt-2"
              >
                Chiudi
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetails;
