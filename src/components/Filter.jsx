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
  } = useGlobalContext();

  return (
    <div className="fixed top-5 inset-0 bg-stone-400/40 flex items-center justify-center z-1 mt-10">
      <div className="w-lg max-h-[90%] flex flex-col gap-4 bg-gray-100  rounded-lg shadow-md top-5 relative">
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
          <SearchBar />

          <div className="border-b border-gray-900/10 pb-3">
            <h2 className="font-medium mb-2">Ospiti</h2>
            <input
              type="number"
              placeholder="Ospiti"
              className="p-2 border rounded-lg w-[100%]"
              value={guest}
              onChange={(e) => setGuest(e.target.value)}
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
                value={minRooms}
                onChange={(e) => setMinRooms(e.target.value)}
                min="0"
              />
            </div>
            <div className="flex justify-between">
              <p className="content-center">Letti</p>
              <input
                type="number"
                placeholder="Qualsiasi"
                className="p-2 border rounded-lg w-30"
                value={minBeds}
                onChange={(e) => setMinBeds(e.target.value)}
                min="0"
              />
            </div>
            <div className="flex justify-between">
              <p className="content-center">Bagni</p>
              <input
                type="number"
                placeholder="Qualsiasi"
                className="p-2 border rounded-lg w-30"
                value={minRestrooms}
                onChange={(e) => setMinRestrooms(e.target.value)}
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
