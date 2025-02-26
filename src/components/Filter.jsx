import { useGlobalContext } from "../context/GlobalContext";
import Counter from "./Counter";

const Filter = ({ deleteFilter }) => {
  const { fetchBnB,
    city,
    setCity,
    minRooms,
    setMinRooms,
    maxRooms,
    setMaxRooms,
    minBeds,
    setMinBeds,
    maxBeds,
    setMaxBeds,
    guest,
    setGuest,
    minRestrooms,
    setMinRestrooms,
    maxRestrooms,
    setMaxRestrooms,
  } = useGlobalContext();

  const handleFilter = (e) => {
    e.preventDefault();
    fetchBnB({
      city,
      minRooms,
      maxRooms,
      minBeds,
      maxBeds,
      guest,
      minRestrooms,
      maxRestrooms,
    });
  };

  return (
    <div className="fixed top-22 inset-0 bg-stone-400/40 flex items-center justify-center z-1">
      <div className="w-lg max-h-[90%] flex flex-col gap-4 bg-gray-100 p-10 rounded-lg shadow-md top-5 relative">
        <div className="">
          <h3 className="text-center">Filtri</h3>
          <button onClick={deleteFilter} className="absolute end-5 top-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

          </button>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleFilter}>
          <div className="border-b border-gray-900/10 pb-3">
            <h2 className="font-medium">Dove</h2>
            <input
              type="text"
              placeholder="In quale città vorresti andare"
              className="p-2 border rounded-lg"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />


          </div>

          <div className="border-b border-gray-900/10 pb-3">
            <h2 className="font-medium">Ospiti</h2>
            <input
              type="number"
              placeholder="Ospiti"
              className="p-2 border rounded-lg"
              value={guest}
              onChange={(e) => setGuest(e.target.value)}
            />
          </div>
          <Counter />
          <div className="flex flex-col gap-4 border-b border-gray-900/10 pb-3">
            <h2 className="font-medium">Stanze e letti</h2>
            <input
              type="number"
              placeholder="Min. Camere"
              className="p-2 border rounded-lg"
              value={minRooms}
              onChange={(e) => setMinRooms(e.target.value)}
            />

            <input
              type="number"
              placeholder="Min. Letti"
              className="p-2 border rounded-lg"
              value={minBeds}
              onChange={(e) => setMinBeds(e.target.value)}
            />

            <input
              type="number"
              placeholder="Min. Bagni"
              className="p-2 border rounded-lg"
              value={minRestrooms}
              onChange={(e) => setMinRestrooms(e.target.value)}
            />

          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Applica</button>
        </form>
      </div>
    </div>
  );
};

export default Filter;
