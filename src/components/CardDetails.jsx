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
        className="w-full h-130 object-cover rounded-lg"
        style={{ objectPosition: "center" }}
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
    reviews,
    handleFilter,
    foto1,
    foto2,
    price,
    type,
    accomodation_type,
    guest_number,
    wifi,
    tv,
    pool,
    kitchen,
    washing_machine,
    heating,
    air_conditioning,
    hairdryer,
    iron
  } = bnbId;

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

  const services = [
    { name: "WiFi", available: wifi },
    { name: "TV", available: tv },
    { name: "Piscina", available: pool },
    { name: "Cucina", available: kitchen },
    { name: "Lavatrice", available: washing_machine },
    { name: "Riscaldamento", available: heating },
    { name: "Aria condizionata", available: air_conditioning },
    { name: "Asciugacapelli", available: hairdryer },
    { name: "Ferro da stiro", available: iron },
  ];

  return (
    <div className="relative">
      <Link className="top-30 mx-10 mt-10" to={-1} onClick={handleFilter}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 bg-stone-400 text-white mx-5 rounded cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
        </svg>
      </Link>
      <div className="flex flex-col md:flex-row items-center mt-10 mx-4 md:mx-20">
        <ImageSlider thumbnail={thumbnail} foto1={foto1} foto2={foto2} />
        <div className="p-4 m-5 w-full md:w-1/3 h-full flex flex-col justify-between">
          <h1 className="text-3xl font-bold mb-4 text-left">{description}</h1>
          <div className="flex flex-col">
            <p className="text-gray-700 mb-2"><strong>Tipo di abitazione:</strong> {type}</p>
            <p className="text-gray-700 mb-2"><strong>Tipo di alloggio:</strong> {accomodation_type}</p>
            <p className="text-gray-700 mb-2"><strong>Città:</strong> {city}</p>
            <p className="text-gray-700 mb-2"><strong>Indirizzo:</strong> {address}</p>
            <p className="text-gray-700 mb-2"><strong>Ospiti:</strong> {guest_number}</p>
            <p className="text-gray-700 mb-2"><strong>Letti:</strong> {beds}</p>
            <p className="text-gray-700 mb-2"><strong>Camere:</strong> {rooms}</p>
            <p className="text-gray-700 mb-2"><strong>Bagni:</strong> {restrooms}</p>
            <p className="text-gray-700 mb-2"><strong>Metri Quadrati:</strong> {square_meters}</p>
            <div className="flex items-center mt-2">
              <button className="px-2 py-1 border-stone-400 rounded-xl cursor-pointer">
                ❤️
              </button>
              <span className="ml-2 text-gray-700">{likes}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 md:mx-20 mt-10">
        <h3 className="text-2xl font-bold mb-4">Servizi Offerti:</h3>
        <ul className="list-none flex flex-wrap">
          {services.filter(service => service.available).map((service, index) => (
            <li key={index} className="flex items-center mb-2 mr-4">
              <span className="text-green-500 mr-2">✔</span>
              <span className="ml-2">{service.name}</span>
            </li>
          ))}
        </ul>
        <h3 className="text-2xl font-bold mt-6">Prezzo: {price ? `${price} € a notte` : "Non disponibile"}</h3>
      </div>
      <div className="mx-4 md:mx-20 mt-10 p-4 border-t border-gray-300">
        <h3 className="text-2xl font-bold mb-4">Dati dell'Host:</h3>
        <p className="text-gray-700 mb-2"><strong>Host:</strong> {host_name} {host_surname}</p>
        <a href={`mailto:[${host_email}]`} className="text-gray-700 mb-2">
          <strong>Email:</strong> {host_email}
        </a>
        <p className="text-gray-700 mb-2"><strong>Telefono Host:</strong> {host_phone}</p>
      </div>
      <div className="mx-4 md:mx-20 mt-10">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-bold">Recensioni:</h3>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-2 py-2 ms-1 text-xs text-stone-600 bg-yellow-500 border-stone-400 rounded-xl cursor-pointer"
          >
            Aggiungi una recensione
          </button>
        </div>
        <div className="flex flex-col">
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
                placeholder="Cognome"
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
              <div className="flex justify-center">

                <button
                  type="submit"
                  className="bg-yellow-500 text-white p-2 rounded mt-2 mx-2"
                >
                  Pubblica
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-red-500 text-white p-2 rounded mt-2"
                >
                  x
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetails;
