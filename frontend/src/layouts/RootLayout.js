import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";

export default function RootLayout() {
  const [darkMode, setDarkMode] = useState(true);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <div className={`App ${darkMode ? "dark" : ""} `}>
      <div className="dark:bg-teal-950">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <main>
          <ScrollToTop />
          <Outlet darkMode={darkMode} />
          <ToastContainer />
        </main>
        <Footer />
      </div>
    </div>
  );
}
