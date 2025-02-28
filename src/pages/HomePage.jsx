import SearchBar from "../components/SearchBar";
import { useGlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { handleFilter } = useGlobalContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    handleFilter(e)
    navigate(`/results`); //il navigate non si può usare nel global context perciò c'è una funzione handlesubmit per poter eseguire il metodo handleFilter e il navigate
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <SearchBar />
        <h1>CIAOOOOOOOOOOOO</h1>
        <button type="submit">CLICCAMI :8</button>
      </form>
    </>
  );
};

export default HomePage;
