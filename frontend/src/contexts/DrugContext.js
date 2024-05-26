import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DrugContext = createContext();

export const DrugProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [drugs, setDrugs] = useState([]);
  const [drug, setDrug] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [categoryId, setCategoryId] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [drugsByCategory, setDrugsByCategory] = useState("");
  const [meta, setMeta] = useState()

  const getDrugs = () => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_SERVER_URL}/drugs/all?page=${pageNumber}${
            categoryId ? `&categoryId=${categoryId}` : ""
          }`
        )
        .then((res) => {
          setLoading(false);
          setDrugs(res.data.data);
          setMeta(res.data)
          resolve(res);
        })
        .catch((err) => {
          reject(err);
          setError(err);
          setLoading(false);
        });
    });
  };

  const getDrugsByCategory = () => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_SERVER_URL}/drugs/all?page=${pageNumber}${
            categoryId ? `&categoryId=${categoryId}` : ""
          }`
        )
        .then((res) => {
          setLoading(false);
          setDrugsByCategory(res.data);
          setMeta(res.data)
          resolve(res);
        })
        .catch((err) => {
          reject(err);
          setError(err);
          setLoading(false);
        });
    });
  };
  const getDrugsById = (id) => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      axios
        .get(`${process.env.REACT_APP_BACKEND_SERVER_URL}/drugs/` + id)
        .then((res) => {
          setLoading(false);
          setDrug(res.data);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
          setError(err);
          setLoading(false);
        });
    });
  };

  const getDrugsByName = (name) => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      axios
        .get(`${process.env.REACT_APP_BACKEND_SERVER_URL}/drugs/search?name=${name}`)
        .then((res) => {
          setLoading(false);
          setDrugs(res.data);
          resolve(res);
          setMeta(res.data);
        })
        .catch((err) => {
          reject(err);
          setError(err);
          console.log(err.message);
          setLoading(false);
        });
    });
  };

  useEffect(() => {
    getDrugs();
  }, [pageNumber, categoryId]);

  return (
    <DrugContext.Provider
      value={{
        loading,
        getDrugs,
        getDrugsById,
        getDrugsByName,
        drugs,
        setDrugs,
        pageNumber,
        setPageNumber,
        setCategoryId,
        categoryId,
        isSearched,
        setIsSearched,
        getDrugsByCategory,
        setDrugsByCategory,
        drugsByCategory,
        meta
      }}
    >
      {children}
    </DrugContext.Provider>
  );
};
