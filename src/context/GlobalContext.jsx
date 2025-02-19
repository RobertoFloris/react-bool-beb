import { createContext, useState, useContext } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  const api_url = import.meta.env.VITE_API_URL;

  const [bnb, setBnb] = useState([]);

  const fetchBnB = () => {
    axios.get(api_url)
      .then(res => {
        setBnb(res.data);
      })
      .catch(err => console.log(err))

  }

  const value = {
    fetchBnB,
    bnb
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