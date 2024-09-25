import axios from "axios";
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const savedUser = localStorage.getItem("user");
  const parsedUser = JSON.parse(savedUser);
  const [user, setUser] = useState(parsedUser);

  const login = ({ email, password }) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${process.env.REACT_APP_BACKEND_SERVER_URL}/users/login`, {
          email,
          password,
        })
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data));
          setUser(res.data);
          resolve(res);
          window.location.replace("/dashboard");
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const register = (data) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${process.env.REACT_APP_BACKEND_SERVER_URL}/users/signup`, data)
        .then((res) => {
          setUser(res.data);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };


  const logout = () => {
    localStorage.clear();
    window.location.replace("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        register,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
