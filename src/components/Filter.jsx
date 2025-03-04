import { useGlobalContext } from "../context/GlobalContext";
import SearchBar from "./SearchBar";

const Filter = () => {
  const {
    minRooms,
    setMinRooms,
    minBeds,
    setMinBeds,
    guest,
    setGuest,
    minRestrooms,
    setMinRestrooms,
    handleFilter,
    setIsVisible,
    maxPrice,
    setMaxPrice
  } = useGlobalContext();

  return (
    <div className="fixed inset-0 bg-stone-400/40 flex items-center justify-center z-20 ">
      <div className="w-lg max-h-[90%] flex flex-col gap-4 bg-gray-100  rounded-lg shadow-md top-15 relative">
        <div className="">
          <h3 className="text-center font-bold p-5">Filtri</h3>
          <button
            className="absolute end-5 top-5"
            onClick={() => setIsVisible(false)}
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
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
        <form
          className="flex flex-col gap-4 overflow-auto p-5"
          onSubmit={handleFilter}
        >
          <div className="border-b border-gray-900/10 pb-3">
            <h2 className="mb-2">Città</h2>
            <SearchBar />
            <h2 className="font-medium my-2">Ospiti</h2>
            <input
              type="number"
              placeholder="Qualsiasi numero"
              className="p-2 border rounded-lg w-full"
              value={guest === null ? "" : guest}
              onChange={(e) => {
                const value = parseInt(e.target.value, 10);
                setGuest(value > 0 ? value : null);
              }}
              min="0"
            />
          </div>

          <div className="flex flex-col gap-4 border-b border-gray-900/10 pb-3">
            <h2 className="font-medium">Stanze e letti</h2>

            <div className="flex justify-between">
              <p className="content-center">Camere</p>
              <input
                type="number"
                placeholder="Qualsiasi"
                className="p-2 border rounded-lg w-30"
                value={minRooms === null ? "" : minRooms}
                onChange={(e) => {
                  const value = parseInt(e.target.value, 10);
                  setMinRooms(value > 0 ? value : null);
                }}
                min="0"
              />
            </div>

            <div className="flex justify-between">
              <p className="content-center">Letti</p>
              <input
                type="number"
                placeholder="Qualsiasi"
                className="p-2 border rounded-lg w-30"
                value={minBeds === null ? "" : minBeds}
                onChange={(e) => {
                  const value = parseInt(e.target.value, 10);
                  setMinBeds(value > 0 ? value : null);
                }}
                min="0"
              />
            </div>

            <div className="flex justify-between">
              <p className="content-center">Bagni</p>
              <input
                type="number"
                placeholder="Qualsiasi"
                className="p-2 border rounded-lg w-30"
                value={minRestrooms === null ? "" : minRestrooms}
                onChange={(e) => {
                  const value = parseInt(e.target.value, 10);
                  setMinRestrooms(value > 0 ? value : null);
                }}
                min="0"
              />
            </div>

            <div className="flex justify-between">
              <p className="content-center">Prezzo massimo per notte</p>
              <input
                type="number"
                placeholder="Qualsiasi"
                className="p-2 border rounded-lg w-30"
                value={maxPrice === null ? "" : maxPrice}
                onChange={(e) => {
                  const value = parseInt(e.target.value, 10);
                  setMaxPrice(value > 0 ? value : null);
                }}
                min="0"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-stone-500 text-white px-4 py-2 rounded-lg"
            onClick={handleFilter}
          >
            Applica
          </button>
        </form>
      </div>
    </div>
  );
};

export default Filter;
