import SearchBar from "../components/SearchBar";
import { useGlobalContext } from "../context/GlobalContext";

const HomePage = () => {
  const { filters, handleFilter } = useGlobalContext();

  return (
    <>
      <form onSubmit={handleFilter}>
        <SearchBar />
        <h1>CIAOOOOOOOOOOOO</h1>
        <button type="submit">CLICCAMI :8</button>
      </form>
    </>
  );
};

export default HomePage;
