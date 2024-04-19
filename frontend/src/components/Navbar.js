import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { GrCart } from "react-icons/gr";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AuthContext } from "../contexts/AuthContext";
import { CartContext } from "../contexts/CartContext";

export default function Navbar({ toggleDarkMode, darkMode }) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const loginRef = useRef();
  const mobileRef = useRef();
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const { cartItem } = useContext(CartContext);

  useEffect(() => {
    const menuHandler = (e) => {
      if (!loginRef.current.contains(e.target)) {
        setLoginOpen(false);
      }
    };
    document.addEventListener("mousedown", menuHandler);

    return () => {
      document.removeEventListener("mousedown", menuHandler);
    };
  }, []);

  useEffect(() => {
    const menuHandler = (e) => {
      if (!mobileRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", menuHandler);

    return () => {
      document.removeEventListener("mousedown", menuHandler);
    };
  }, []);

  return (
    <nav className="navbar fixed left-0 right-0 py-7 px-7 flex items-center shadow-lg dark:bg-[rgba(4,47,46,0.65)] backdrop-blur-lg dark:text-orange-300 text-teal-900 z-50">
      <p className="font-bold text-3xl dark:text-orange-300 dark:hover:text-orange-600 text-teal-900">
        <Link className="hidden lg:block " to="/">
          Medi<span className="dark:text-orange-400 text-teal-600">kart</span>
        </Link>
        <Link className="lg:hidden" to="/">
          M.<span className="dark:text-orange-400 text-teal-600">k</span>
        </Link>
      </p>
      {/* icons on mobile */}
      <div className="flex ml-auto gap-8 items-center">
        <div
          ref={mobileRef}
          className="hamburger ml-auto md:hidden flex items-center"
        >
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            <GiHamburgerMenu size={25} />
          </button>
          {mobileOpen && (
            <div className="drop-down absolute top-20 right-0 z-50">
              <button className="w-56 dark:bg-teal-900 bg-slate-50 px-5 py-2 rounded-sm shadow-2xl ">
                <ul className="links flex flex-col items-end">
                  <li className="py-2 border-solid mb-2 border-b-2 border-teal-800 dark:hover:text-orange-500 w-full flex ">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="py-2 border-solid mb-2 border-b-2 border-teal-800 dark:hover:text-orange-500 w-full flex">
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li className="py-2 pb-4 border-solid mb-2 border-b-2 border-teal-800 dark:hover:text-orange-500 w-full flex">
                    <Link to="/about">About Us</Link>
                  </li>
                  <li className="py-2 border-solid mb-2 border-b-2 border-teal-800 dark:hover:text-orange-500 w-full flex">
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li className="py-2 border-solid mb-2 border-b-2 border-teal-800 dark:hover:text-orange-500 w-full flex">
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li className="py-2 border-solid mb-2 border-b-2 border-teal-800 dark:hover:text-orange-500 w-full flex">
                    <Link to="/login">Login</Link>
                  </li>
                  <li className="py-2 dark:hover:text-orange-500 w-full flex">
                    <Link to="/register">Register</Link>
                  </li>
                </ul>
              </button>
            </div>
          )}
        </div>
        <button className="md:hidden" onClick={toggleDarkMode}>
          {darkMode ? <FaToggleOff size={30} /> : <FaToggleOn size={30} />}
        </button>
        <button onClick={() => navigate("/cart")} className="md:hidden">
          <GrCart size="2rem" />
        </button>
      </div>
      {/* icons on web */}
      <ul className="hidden md:flex links ml-auto items-center">
        <li className="pr-8 dark:hover:text-orange-500">
          <Link to="/">Home</Link>
        </li>
        <li className="pr-8 dark:hover:text-orange-500">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="pr-8 dark:hover:text-orange-500">
          <Link to="/about">About Us</Link>
        </li>
        <li className="pr-8 dark:hover:text-orange-500">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="pr-8 dark:hover:text-orange-500">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="profile pr-8 relative" ref={loginRef}>
          <button onClick={() => setLoginOpen(!loginOpen)}>
            <CgProfile size="2rem" />
          </button>
          {loginOpen && (
            <div className="drop-down dark:bg-teal-900 bg-slate-50 px-5 py-2 rounded-xl shadow-lg absolute bottom--1 right-6 z-50">
              {user ? (
                <div>
                  <ul>
                    <li className="pb-2 dark:hover:text-orange-500">
                      <button>
                        <Link to="/dashboard">Dashboard</Link>
                      </button>
                    </li>
                    <li className="pb-2 dark:hover:text-orange-500">
                      <button onClick={() => logout()}>Logout</button>
                    </li>
                  </ul>
                </div>
              ) : (
                <ul>
                  <li className="pb-2 border-solid border-b-2 border-teal-700 dark:hover:text-orange-500">
                    <Link to="/login">Login</Link>
                  </li>
                  <li className="pt-2 dark:hover:text-orange-500">
                    <Link to="/register">Register</Link>
                  </li>
                </ul>
              )}
            </div>
          )}
        </li>
        <li>
          <button
            onClick={() => navigate("/cart")}
            className="dark:hover:text-orange-500 relative"
          >
            <GrCart size={30} />
            {cartItem && cartItem.length > 0 && (
              <div className="absolute border-2 border-teal-700 flex items-center justify-center bg-white rounded-2xl w-7 h-7 top-[-14px] right-[-14px]">
                <p className="font-bold text-teal-950">{cartItem?.length}</p>
              </div>
            )}
          </button>
        </li>
        <li>
          <button
            className="ml-10 dark:hover:text-orange-500"
            onClick={toggleDarkMode}
          >
            {darkMode ? <FaToggleOff size={30} /> : <FaToggleOn size={30} />}
          </button>
        </li>
      </ul>
    </nav>
  );
}
