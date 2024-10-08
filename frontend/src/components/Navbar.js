import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { GrCart } from "react-icons/gr";
import { FaToggleOff, FaToggleOn, FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthContext";
import { CartContext } from "../contexts/CartContext";

export default function Navbar({ toggleDarkMode, darkMode }) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const { cartCount } = useContext(CartContext);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };
  const toggleLoginMenu = () => {
    setLoginOpen(!loginOpen);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const closeLoginMenu = () => {
    setLoginOpen(false);
  };

  return (
    <nav className="navbar fixed left-0 right-0 py-7 px-7 flex items-center shadow-lg dark:bg-[rgba(4,47,46,0.65)] backdrop-blur-lg dark:text-orange-300 text-teal-900 z-50">
      <p className="font-bold text-3xl dark:text-orange-300 dark:hover:text-orange-600 text-teal-900">
        <button className="hidden lg:block" onClick={() => navigate("/")}>
          Medi<span className="dark:text-orange-400 text-teal-600">kart</span>
        </button>
        <button className="lg:hidden" onClick={() => navigate("/")}>
          M.<span className="dark:text-orange-400 text-teal-600">k</span>
        </button>
      </p>
      {/* icons on mobile */}
      <div className="flex ml-auto gap-8 items-center">
        <div className="hamburger ml-auto md:hidden flex items-center">
          <button onClick={toggleMobileMenu}>
            <FaBars size={25} />
          </button>
          {mobileOpen && (
            <div className="drop-down absolute top-0 right-0 z-50">
              <div className="relative w-[100vw] h-[100vh] dark:bg-teal-950 bg-slate-50 py-2 rounded-sm shadow-2xl flex items-center ">
                <ul className="buttons flex flex-col items-center py-10 h-[70%] w-full justify-center">
                  <li className="hover:text-white w-full flex items-center justify-center">
                    <button
                      className="hover:bg-teal-800 w-full h-full p-6"
                      onClick={() => {
                        navigate("/");
                        closeMobileMenu();
                      }}
                    >
                      Home
                    </button>
                  </li>
                  <li className="hover:text-white w-full flex items-center justify-center">
                    <button
                      className="hover:bg-teal-800 w-full h-full p-6"
                      onClick={() => {
                        navigate("/shop");
                        closeMobileMenu();
                      }}
                    >
                      Shop
                    </button>
                  </li>
                  <li className="hover:text-white w-full flex items-center justify-center">
                    <button
                      className="hover:bg-teal-800 w-full h-full p-6"
                      onClick={() => {
                        navigate("/about");
                        closeMobileMenu();
                      }}
                    >
                      About Us
                    </button>
                  </li>
                  <li className="hover:text-white w-full flex items-center justify-center">
                    <button
                      className="hover:bg-teal-800 w-full h-full p-6"
                      onClick={() => {
                        navigate("/contact");
                        closeMobileMenu();
                      }}
                    >
                      Contact Us
                    </button>
                  </li>
                  <li className="hover:text-white w-full flex items-center justify-center">
                    <button
                      className="hover:bg-teal-800 w-full h-full p-6"
                      onClick={() => {
                        navigate("/blog");
                        closeMobileMenu();
                      }}
                    >
                      Blog
                    </button>
                  </li>
                  {user ? (
                    <>
                      <li className="hover:text-white w-full flex items-center justify-center">
                        <button
                          className="hover:bg-teal-800 w-full h-full p-6"
                          onClick={() => {
                            navigate("/dashboard");
                            closeLoginMenu();
                          }}
                        >
                          Dashboard
                        </button>
                      </li>
                      <li className="hover:text-white w-full flex items-center justify-center">
                        <button
                          className="hover:bg-teal-800 w-full h-full p-6"
                          onClick={() => logout()}
                        >
                          Logout
                        </button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="hover:text-white w-full flex items-center justify-center">
                        <button
                          className="hover:bg-teal-800 w-full h-full p-6"
                          onClick={() => {
                            navigate("/login");
                            closeMobileMenu();
                          }}
                        >
                          Login
                        </button>
                      </li>
                      <li className="hover:text-white w-full flex items-center justify-center">
                        <button
                          className="hover:bg-teal-800 w-full h-full p-6"
                          onClick={() => {
                            navigate("/register");
                            closeMobileMenu();
                          }}
                        >
                          Register
                        </button>
                      </li>
                    </>
                  )}
                </ul>
                <button
                  className="absolute top-10 right-10"
                  onClick={toggleMobileMenu}
                >
                  {mobileOpen && <FaTimes size={25} />}
                </button>
              </div>
            </div>
          )}
        </div>
        <button className="md:hidden" onClick={toggleDarkMode}>
          {darkMode ? <FaToggleOff size={30} /> : <FaToggleOn size={30} />}
        </button>
        <button onClick={() => navigate("/cart")} className="md:hidden">
          <GrCart size={30} />
        </button>
      </div>
      {/* icons on web */}
      <ul className="hidden md:flex buttons ml-auto items-center">
        <li className="pr-8 dark:hover:text-orange-500">
          <button onClick={() => navigate("/")}>Home</button>
        </li>
        <li className="pr-8 dark:hover:text-orange-500">
          <button onClick={() => navigate("/shop")}>Shop</button>
        </li>
        <li className="pr-8 dark:hover:text-orange-500">
          <button onClick={() => navigate("/about")}>About Us</button>
        </li>
        <li className="pr-8 dark:hover:text-orange-500">
          <button onClick={() => navigate("/contact")}>Contact Us</button>
        </li>
        <li className="pr-8 dark:hover:text-orange-500">
          <button onClick={() => navigate("/blog")}>Blog</button>
        </li>
        <li className="profile pr-8 relative">
          <button onClick={toggleLoginMenu}>
            <CgProfile size={30} />
          </button>
          {loginOpen && (
            <div className="drop-down dark:bg-teal-900 bg-slate-50 px-5 py-2 rounded-xl shadow-lg absolute bottom--1 right-6 z-50">
              {user ? (
                <div>
                  <ul>
                    <li className="pb-2 dark:hover:text-orange-500">
                      <button
                        onClick={() => {
                          navigate("/dashboard");
                          closeLoginMenu();
                        }}
                      >
                        Dashboard
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
                    <button
                      onClick={() => {
                        navigate("/login");
                        closeLoginMenu();
                      }}
                    >
                      Login
                    </button>
                  </li>
                  <li className="pt-2 dark:hover:text-orange-500">
                    <button
                      onClick={() => {
                        navigate("/register");
                        closeLoginMenu();
                      }}
                    >
                      Register
                    </button>
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
            {cartCount > 0 && (
              <div className="absolute border-2 border-teal-700 flex items-center justify-center bg-white rounded-2xl w-7 h-7 top-[-14px] right-[-14px]">
                <p className="font-bold text-teal-950">{cartCount}</p>
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
