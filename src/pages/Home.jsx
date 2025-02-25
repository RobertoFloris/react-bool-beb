import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import CardHome from "../components/CardHome";
import Filter from "../components/Filter"
import { useState } from "react";
const Home = () => {
  const { fetchBnB, bnb } = useGlobalContext();
  const [isVisible, setIsVisible] = useState(false)
  useEffect(fetchBnB, []);

  return (
    <>
      <div className="flex fixed ">
        <button
          className="p-2 flex border border-stone-400 rounded-xl bg-neutral-50 z-1"
          onClick={() => setIsVisible(!isVisible)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
          </svg>
          <p className="px-2">Filtri</p>


        </button>

        <p>

        </p>

      </div>
      {isVisible && <Filter deleteFilter={() => setIsVisible(false)} />}
      <div className="flex flex-wrap justify-center gap-4">
        {bnb.map((item) => (
          <CardHome key={item.id} bnb={item} />
        ))}
      </div>
    </>
  );
};

export default Home;
