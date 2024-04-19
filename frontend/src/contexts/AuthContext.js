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
        .post("http://localhost:3000/users/login", {
          email,
          password,
        })
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data));
          setUser(res.data);
          resolve(res);
          window.location.replace("/dashboard")
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const register = (data) => {
    return new Promise((resolve, reject) => {
      axios
        .post("http://localhost:3000/users/register", data)
        .then((res) => {
          setUser(res.data);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  // useEffect(() => {
  //   if (!user) {
  //   }
  // }, []);

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
