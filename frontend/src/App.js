import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import ProductPage from "./pages/ProductPage";
import PageNotFound from "./pages/PageNotFound";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./pages/Cart";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div className={`App ${darkMode ? "dark" : ""} `}>
      <ScrollToTop />
      <div className="dark:bg-teal-950">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="content">
          <Routes>
            <Route path="*" element={<PageNotFound darkMode={darkMode} />} />
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/shop" element={<Shop darkMode={darkMode} />} />
            <Route path="/about" element={<About darkMode={darkMode} />} />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />
            <Route path="/blog" element={<Blog darkMode={darkMode} />} />
            <Route path="/login" element={<Login darkMode={darkMode} />} />
            <Route
              path="/drugs/:id"
              element={<ProductPage darkMode={darkMode} />}
            />
            <Route path="/cart" element={<Cart darkMode={darkMode} />} />

            <Route
              path="/register"
              element={<Register darkMode={darkMode} />}
            />
            <Route
              path="/dashboard"
              element={<Dashboard darkMode={darkMode} />}
            />
          </Routes>
          <ToastContainer />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
