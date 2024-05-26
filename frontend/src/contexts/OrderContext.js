import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState("");
  const { user } = useContext(AuthContext);

  const getOrderByUserId = () => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      axios
        .get(`${process.env.REACT_APP_BACKEND_SERVER_URL}/orders/user/` + user.user._id)
        .then((res) => {
          resolve(res);
          setLoading(false);
          setOrders(res.data);
        })
        .catch((err) => {
          reject(err);
          setError(err);
          setLoading(false);
        });
    });
  };
  const getOrderByOrderId = (orderId) => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      axios
        .get(`${process.env.REACT_APP_BACKEND_SERVER_URL}/orders/` + orderId)
        .then((res) => {
          resolve(res);
          setLoading(false);
          setOrder(res.data);
        })
        .catch((err) => {
          reject(err);
          setError(err);
          setLoading(false);
        });
    });
  };

  useEffect(() => {
    if (user) {
      getOrderByUserId();
    }
  }, []);

  return (
    <OrderContext.Provider
      value={{
        orders,
        getOrderByUserId,
        getOrderByOrderId,
        order,
        setOrder,
        loading,
        error,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
