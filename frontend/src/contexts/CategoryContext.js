import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);

  const getCategory = () => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      axios
        .get(`${process.env.REACT_APP_BACKEND_SERVER_URL}/categories/all`)
        .then((res) => {
          setCategories(res.data);
          resolve(res);
          setLoading(false);
        })
        .catch((err) => {
          reject(err);
          setError(err);
          setLoading(false);
        });
    });
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        loading,
        error,
        categories,
        user,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
