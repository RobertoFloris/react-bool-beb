import { createContext, useState, useContext } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  const api_url = import.meta.env.VITE_API_URL;

  const [bnb, setBnb] = useState([]);
  const [bnbId, setBnbId] = useState({});

  const fetchBnB = () => {
    axios.get(api_url)
      .then(res => {
        setBnb(res.data);
      })
      .catch(err => console.log(err))
  }

  const fetchBnBId = (id) => {
    axios.get(`${api_url}/${id}`)
      .then(res => {
        setBnbId(res.data);
      })
      .catch(err => console.log(err))
  }

  const value = {
    fetchBnB,
    bnb,
    fetchBnBId,
    bnbId
  }

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export {
  GlobalProvider,
  useGlobalContext
}