import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import CardHome from "../components/CardHome";
import Filter from "../components/Filter"

const Home = () => {
  const { fetchBnB, bnb, currentPage, totalPages, nextPage, prevPage } = useGlobalContext();

  useEffect(fetchBnB, []);

  return (
    <>
      <Filter />
      <div className="flex flex-wrap justify-center just gap-4">
        {bnb.map((item) => (
          < CardHome key={item.id} bnb={item} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-20 my-2 gap-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-gray-300 rounded disabled:opacity-50 ${currentPage > 1 ? "cursor-pointer" : "cursor-default"}`}
        >
          Pagina Precedente
        </button>

        <span>Pagina {currentPage} di {totalPages}</span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-gray-300 rounded disabled:opacity-50 ${currentPage < totalPages ? "cursor-pointer" : "cursor-default"}`}
        >
          Pagina Successiva
        </button>
      </div>
    </>
  );
};

export default Home;
