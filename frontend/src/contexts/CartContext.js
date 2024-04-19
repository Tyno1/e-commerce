import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItem, setCartItem] = useState("");
  const { user } = useContext(AuthContext);

  const AddToCart = (payload) => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      axios
        .post("http://localhost:3000/cart", payload)
        .then((res) => {
          resolve(res);
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          reject(err);
          setError(err);
          setLoading(false);
        });
    });
  };

  const UpdateCart = (payload, cartId) => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      axios
        .put("http://localhost:3000/cart/" + cartId, payload)
        .then((res) => {
          resolve(res);
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          reject(err);
          setError(err);
          setLoading(false);
        });
    });
  };

  const getCartItemsByUserId = (userId) => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      axios
        .get("http://localhost:3000/cart/user/" + userId)
        .then((res) => {
          resolve(res);
          setLoading(false);
          setData(res.data);
        })
        .catch((err) => {
          reject(err);
          setError(err);
          setLoading(false);
        });
    });
  };

  const DeleteFromCart = (cartId) => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      axios
        .delete("http://localhost:3000/cart/" + cartId)
        .then((res) => {
          resolve(res);
          setData(res.data);
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
    getCartItemsByUserId(user?.user._id)
      .then((res) => {
        setCartItem(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  });

  return (
    <CartContext.Provider
      value={{
        data,
        error,
        loading,
        AddToCart,
        getCartItemsByUserId,
        cartItem,
        setCartItem,
        DeleteFromCart,
        UpdateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
