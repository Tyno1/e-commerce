import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DrugContext = createContext();

export const DrugProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [drugs, setDrugs] = useState([]);
  const [drug, setDrug] = useState("")
  const [pageNumber, setPageNumber] = useState(1);
  const [categoryId, setCategoryId] = useState("");

  const getDrugs = () => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      axios
        .get(
          `http://localhost:3000/drugs/all?page=${pageNumber}&categoryId=${categoryId}`
        )
        .then((res) => {
          setLoading(false);
          setDrugs(res.data);
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
        .get("http://localhost:3000/drugs/" + id)
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

  useEffect(() => {
    getDrugs();
  }, [pageNumber, categoryId]);

  return (
    <DrugContext.Provider
      value={{
        loading,
        getDrugs,
        getDrugsById,
        drugs,
        setDrugs,
        pageNumber,
        setPageNumber,
        setCategoryId,
        categoryId
      }}
    >
      {children}
    </DrugContext.Provider>
  );
};
