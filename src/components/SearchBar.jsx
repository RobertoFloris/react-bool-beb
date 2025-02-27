import { useGlobalContext } from "../context/GlobalContext";

const SearchBar = () => {
  const { city, setCity } = useGlobalContext();

  return (
    <div className="border-b border-gray-900/10 pb-3">
      <h2 className="font-medium mb-2">Dove</h2>
      <input
        type="text"
        placeholder="In quale città vorresti andare"
        className="p-2 border rounded-lg w-[100%]"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
