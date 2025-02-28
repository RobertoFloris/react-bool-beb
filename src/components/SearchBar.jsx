import { useGlobalContext } from "../context/GlobalContext";

const SearchBar = () => {
  const { city, setCity } = useGlobalContext();

  return (
    <input
      type="text"
      placeholder="In quale città vorresti andare"
      className="p-2 border rounded-lg w-[100%] bg-neutral-50"
      value={city}
      onChange={(e) => setCity(e.target.value)}
    />

  );
};

export default SearchBar;
