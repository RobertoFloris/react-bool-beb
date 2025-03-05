import SearchBar from "../components/SearchBar";
import CardHome from "../components/CardHome";
import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HomePage = () => {
  const { handleFilter, bestbnb, fetchBestBnB } = useGlobalContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    handleFilter(e);
    navigate(`/results`); //il navigate non si può usare nel global context perciò c'è una funzione handlesubmit per poter eseguire il metodo handleFilter e il navigate
  };

  useEffect(() => {
    fetchBestBnB();
  }, []);

  return (
    <>
      <div className="bg-[url('/img/jumbo.avif')] bg-cover bg-[position:center_30%] w-screen h-screen flex overflow-x-hidden items-center max-h-[30rem]">
        <div className="max-w-[60%] max-h-[90%] px-20">
          <p className="text-yellow-500 text-[3rem] font-bold [text-shadow:3px_3px_10px_rgba(0,0,0,0.8)]">
            Case vacanze in tutta Italia
          </p>
          <p className="text-yellow-500 text-[3rem] font-bold [text-shadow:3px_3px_10px_rgba(0,0,0,0.8)] hidden lg:block">
            Case, chalet, appartamenti e tanto altro
          </p>
        </div>
      </div>

      <div className="max-w-[80%] mt-[-1rem] mx-auto">
        <form onSubmit={handleSubmit} className="flex h-[3.5rem]">
          <SearchBar />
          <button
            type="submit"
            className="px-4 ms-1 bg-yellow-500 border-stone-400 rounded-xl cursor-pointer"
          >
            Cerca
          </button>
        </form>
      </div>

      <div className="container">
        <h2 className="text-[2rem] font-bold pt-15 pb-6 text-center">
          I nostri utenti consigliano:
        </h2>
        <Swiper
          spaceBetween={20} // Distanza tra le slide
          slidesPerView={2} // Quante slide si vedono per volta
          centeredSlides={true} // Centra la slide visibile
          navigation
          loop={true} // Imposta il loop continuo dello slider
          breakpoints={{
            640: {
              slidesPerView: 2, // 1 slide per viewport piccolo (mobile)
              centeredSlides: true, // Mantieni centrate le slide anche su mobile
            },
            768: {
              slidesPerView: 2, // 2 slide per viewport medio
              centeredSlides: true,
              spaceBetween: 2, // Un po' di spazio tra le slide per lasciare intravedere le altre
            },
            1024: {
              slidesPerView: 4, // 3 slide per viewport largo
              centeredSlides: true,
              spaceBetween: 10, // Ancora più spazio tra le slide per visibilità extra
            },
          }}
        >
          {bestbnb.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex justify-center">
                <CardHome bnb={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container">
        <h2 className="text-[2rem] font-bold pt-15 pb-6 text-center">
          Con noi prenotare è facile e sicuro
        </h2>

        <div className="flex flex-wrap justify-around pb-10">
          <div className="w-70 h-80 bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between my-4">
            <img
              src="/img/protection_2597435.png"
              alt="Image 1"
              className="h-[40%] h-32 object-cover rounded-lg mb-6 mt-2 icons"
            />
            <h2 className="text-2xl font-semibold text-center mb-2">
              Zero costi nascosti
            </h2>
            <p className="text-gray-600 text-center">
              Con noi il prezzo che vedi è quello che paghi, senza sorprese{" "}
            </p>
          </div>

          <div className="w-70 h-80 bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between my-4">
            <img
              src="/img/smartphone_1024857.png"
              alt="Image 3"
              className="w-full h-32 object-cover rounded-lg mb-4 icons"
            />
            <h2 className="text-2xl font-semibold text-center mb-2">
              Contatto immediato
            </h2>
            <p className="text-gray-600 text-center">
              Possibilità di inviare una mail al proprietario con un semplice click!
            </p>
          </div>

          <div className="w-70 h-80 bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between my-4">
            <img
              src="img/like_1702684.png"
              alt="Image 3"
              className="w-full h-32 object-cover rounded-lg mb-4 icons"
            />
            <h2 className="text-2xl font-semibold text-center mb-2">
              Flessibilità garantita
            </h2>
            <p className="text-gray-600 text-center">
              Le strutture proposte garantiscono la cancellazione gratuita
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
