import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [addToCartRes, setaAddToCartRes] = useState("");
  const [delData, setDelData] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItem, setCartItem] = useState("");
  const [tempPayload, setTempPayload] = useState({ payload: {} });
  const { user } = useContext(AuthContext);
  const [cartCount, setCartCount] = useState(() => {
    let tempPayloadQuantity = tempPayload?.payload.quantity || 0;
    let cartItemCount = 0;
    if (cartItem && cartItem.length > 0) {
      const sumOfQuantities = cartItem
        .map((item) => item.quantity)
        .reduce((acc, val) => acc + val, 0);
      cartItemCount = sumOfQuantities;
    }
    return tempPayloadQuantity + cartItemCount;
  });

  const AddToCart = (payload) => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      axios
        .post(`${process.env.REACT_APP_BACKEND_SERVER_URL}/cart`, payload)
        .then((res) => {
          resolve(res);
          setData(res.data);
          setaAddToCartRes(res.data);
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
        .put(
          `${process.env.REACT_APP_BACKEND_SERVER_URL}/cart/` + cartId,
          payload
        )
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
        .get(`${process.env.REACT_APP_BACKEND_SERVER_URL}/cart/user/` + userId)
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
        .delete(`${process.env.REACT_APP_BACKEND_SERVER_URL}/cart/` + cartId)
        .then((res) => {
          resolve(res);
          setDelData(res.data);
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
    setCartCount(() => {
      let cartItemCount = 0;
      if (cartItem && cartItem.length > 0) {
        const sumOfQuantities = cartItem
          .map((item) => item.quantity)
          .reduce((acc, val) => acc + val, 0);
        cartItemCount = sumOfQuantities;
      }
      return cartItemCount;
    });
  }, [addToCartRes, cartItem]);

  useEffect(() => {
    getCartItemsByUserId(user?.user._id)
      .then((res) => {
        setCartItem(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

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
        tempPayload,
        setTempPayload,
        cartCount,
        setCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
