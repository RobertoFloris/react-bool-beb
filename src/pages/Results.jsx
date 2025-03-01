import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import CardHome from "../components/CardHome";
import Filter from "../components/Filter";

const Results = () => {
  const {
    fetchBnB,
    bnb,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    resetFilters,
    isVisible,
    setIsVisible,
    filters,
    countRecords,
  } = useGlobalContext();

  useEffect(() => {
    fetchBnB(filters);
  }, []);

  return (
    <>
      <div className="flex fixed z-1 ">
        <button
          className="p-2 flex border border-stone-400 rounded-xl bg-neutral-50 me-3 cursor-pointer"
          onClick={() => setIsVisible(!isVisible)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
          <p className="px-2">Filtri</p>
        </button>

        <button
          className="flex p-2 border border-stone-400 rounded-xl bg-neutral-50 cursor-pointer"
          onClick={resetFilters}
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
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
          <p className="red-200"> Resetta filtri</p>
        </button>
      </div>
      <div className="flex justify-end my-2">
        <p> Risultati della ricerca: {countRecords}</p>
      </div>

      <div className="flex flex-wrap gap-4">
        {filters.city && <p className="my-10"><strong>Città:</strong> {filters.city}</p>}
        {filters.guest && <p className="my-10"><strong>Ospiti:</strong> {filters.guest}</p>}
        {filters.minRooms && <p className="my-10"><strong>Camere:</strong> {filters.minRooms}</p>}
        {filters.minBeds && <p className="my-10"><strong>Letti:</strong> {filters.minBeds}</p>}
        {filters.minRestrooms && <p className="my-10"><strong>Bagni:</strong> {filters.minRestrooms}</p>}
      </div>


      {isVisible && (
        <Filter />
      )}
      <div className="flex flex-wrap justify-center gap-4 my-5">
        {bnb.length > 0 ? (
          bnb.map((item) => <CardHome key={item.id} bnb={item} />)
        ) : (
          <h2 className="font-bold">
            Oops! Nessuna casa soddisfa le tue richieste!
          </h2>
        )}
      </div>
      {bnb.length > 0 && <div className="flex justify-center items-center mt-20 my-2 gap-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-gray-300 rounded disabled:opacity-50 ${currentPage > 1 ? "cursor-pointer" : "cursor-default"
            }`}
        >
          Pagina Precedente
        </button>

        <span>
          Pagina {currentPage} di {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-gray-300 rounded disabled:opacity-50 ${currentPage < totalPages ? "cursor-pointer" : "cursor-default"
            }`}
        >
          Pagina Successiva
        </button>
      </div>}
    </>
  );
};

export default Results;
