import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import CardHome from "../components/CardHome";
import Filter from "../components/Filter"

const Home = () => {
  const { fetchBnB, bnb } = useGlobalContext();

  useEffect(fetchBnB, []);

  return (
    <>
      <Filter />
      <div className="flex flex-wrap justify-center gap-4">
        {bnb.map((item) => (
          <CardHome key={item.id} bnb={item} />
        ))}
      </div>
    </>
  );
};

export default Home;
