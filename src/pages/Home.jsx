import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import CardHome from "../components/CardHome";

const Home = () => {
  const { fetchBnB, bnb } = useGlobalContext();

  useEffect(fetchBnB, []);

  return (
    <div>
      {bnb.map((item) => (
        <CardHome key={item.id} bnb={item} />
      ))}
    </div>
  );
};

export default Home;
