import { useGlobalContext } from "../context/GlobalContext";

const Filter = () => {
  const {
    fetchBnB,
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
    <form
      className="flex flex-col gap-4 bg-gray-100 p-4 rounded-lg shadow-md"
      onSubmit={handleFilter}
    >
      <input
        type="text"
        placeholder="Città"
        className="p-2 border rounded-lg"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="number"
        placeholder="Ospiti"
        className="p-2 border rounded-lg"
        value={guest}
        onChange={(e) => setGuest(e.target.value)}
        min="0"
      />
      <input
        type="number"
        placeholder="Min. Camere"
        className="p-2 border rounded-lg"
        value={minRooms}
        onChange={(e) => setMinRooms(e.target.value)}
        min="0"
      />
      <input
        type="number"
        placeholder="Max. Camere"
        className="p-2 border rounded-lg"
        value={maxRooms}
        onChange={(e) => setMaxRooms(e.target.value)}
        min="0"
      />
      <input
        type="number"
        placeholder="Min. Letti"
        className="p-2 border rounded-lg"
        value={minBeds}
        onChange={(e) => setMinBeds(e.target.value)}
        min="0"
      />
      <input
        type="number"
        placeholder="Max. Letti"
        className="p-2 border rounded-lg"
        value={maxBeds}
        onChange={(e) => setMaxBeds(e.target.value)}
        min="0"
      />
      <input
        type="number"
        placeholder="Min. Bagni"
        className="p-2 border rounded-lg"
        value={minRestrooms}
        onChange={(e) => setMinRestrooms(e.target.value)}
        min="0"
      />
      <input
        type="number"
        placeholder="Max. Bagni"
        className="p-2 border rounded-lg"
        value={maxRestrooms}
        onChange={(e) => setMaxRestrooms(e.target.value)}
        min="0"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Filtra
      </button>
    </form>
  );
};

export default Filter;
