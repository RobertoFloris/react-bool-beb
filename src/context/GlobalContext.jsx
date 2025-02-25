import { createContext, useState, useContext } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const api_url = import.meta.env.VITE_API_URL;

  const [bnb, setBnb] = useState([]);
  const [bnbId, setBnbId] = useState({});
  const [city, setCity] = useState("");
  const [minRooms, setMinRooms] = useState("");
  const [maxRooms, setMaxRooms] = useState("");
  const [minBeds, setMinBeds] = useState("");
  const [maxBeds, setMaxBeds] = useState("");
  const [guest, setGuest] = useState("");
  const [minRestrooms, setMinRestrooms] = useState("");
  const [maxRestrooms, setMaxRestrooms] = useState("");

  const fetchBnB = (filters = {}) => {
    const params = new URLSearchParams(filters).toString();
    axios
      .get(`${api_url}?${params}`)
      .then((res) => {
        setBnb(res.data);
      })
      .catch((err) => console.log(err));
  };

  const fetchBnBId = (id) => {
    axios
      .get(`${api_url}/${id}`)
      .then((res) => {
        setBnbId(res.data);
      })
      .catch((err) => console.log(err));
  };

  const fetchLikes = (id) => {
    axios
      .patch(`${api_url}/${id}`)
      .then((res) => {
        console.log(res.data);
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
      })
      .catch((err) => console.log(err));
  };

  const value = {
    fetchBnB,
    bnb,
    fetchBnBId,
    bnbId,
    fetchLikes,
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
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };
