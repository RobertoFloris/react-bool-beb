import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const api_url = import.meta.env.VITE_API_URL;

  const [bestbnb, setBestbnb] = useState([]);
  const [bnb, setBnb] = useState([]);
  const [bnbId, setBnbId] = useState({});
  const [city, setCity] = useState("");
  const [minRooms, setMinRooms] = useState("");
  const [minBeds, setMinBeds] = useState("");
  const [guest, setGuest] = useState("");
  const [minRestrooms, setMinRestrooms] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [filters, setFilters] = useState({});
  const [countRecords, setCountRecords] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const fetchBestBnB = () => {
    axios
      .get(api_url)
      .then((res) => {
        setBestbnb(res.data.data.slice(0, 8));
        // Prende solo i primi 6 risultati
      })
      .catch((error) => console.error("Errore nel fetch:", error));
  };

  const fetchBnB = (filters = {}, page = currentPage) => {
    setFilters(filters);
    const params = new URLSearchParams({ ...filters, page }).toString();

    axios
      .get(`${api_url}?${params}`)
      .then((res) => {
        setBnb(res.data.data);
        setTotalPages(res.data.totalPages);
        setCountRecords(res.data.totalItems);
      })
      .catch((err) => console.log(err));
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    fetchBnB({}, currentPage);
  }, [currentPage]);

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
          minBeds,
          guest,
          minRestrooms,
        });
      })
      .catch((err) => console.log(err));
  };

  const resetFilters = () => {
    // Resetto tutti i filtri
    setCity("");
    setMinRooms("");
    setMinBeds("");
    setGuest("");
    setMinRestrooms("");
    setMaxPrice("");
    fetchBnB();
  };

  const handleFilter = (e) => {
    e.preventDefault();
    fetchBnB({
      city,
      guest: guest > 0 ? guest : "",
      minRooms: minRooms > 0 ? minRooms : "",
      minBeds: minBeds > 0 ? minBeds : "",
      minRestrooms: minRestrooms > 0 ? minRestrooms : "",
      maxPrice: maxPrice > 0 ? maxPrice : "",
    });
    setIsVisible(false);
  };

  const handlerNewHome = (newHome) => {
    const formData = new FormData();

    for (let key in newHome) {
      formData.append(key, newHome[key]);
    }

    return axios
      .post(api_url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const addReview = (bnbId, reviewData) => {
    axios
      .post(`${api_url}/${bnbId}/reviews`, reviewData)
      .then((response) => {
        console.log("Recensione aggiunta:", response.data);
        fetchBnBId(bnbId); // Ricarica i dati dell'annuncio aggiornato
      })
      .catch((error) => {
        console.error("Errore nell'invio della recensione:", error);
      });
  };

  const value = {
    fetchBnB,
    bnb,
    totalPages,
    currentPage,
    setCurrentPage,
    nextPage,
    prevPage,
    fetchBnBId,
    bnbId,
    fetchLikes,
    city,
    setCity,
    minRooms,
    setMinRooms,
    minBeds,
    setMinBeds,
    guest,
    setGuest,
    minRestrooms,
    setMinRestrooms,
    resetFilters,
    handleFilter,
    isVisible,
    setIsVisible,
    filters,
    countRecords,
    fetchBestBnB,
    bestbnb,
    handlerNewHome,
    addReview,
    maxPrice,
    setMaxPrice,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };
