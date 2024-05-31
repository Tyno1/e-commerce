import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="w-full h-full">
      <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8 dark:text-teal-50 mt-20">
        <div className="flex flex-col items-center gap-4 rounded-lg bg-teal-900 p-6 shadow-lg sm:flex-row sm:justify-between">
          <strong className="text-xl sm:text-xl text-gray-50">
            Stay Up to date with Medical Innovations!
          </strong>

          <Link
            className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-teal-900 hover:bg-transparent hover:text-white focus:outline-none active:bg-white/90 active:text-teal-600"
            to="/"
          >
            <span className="text-sm font-medium"> Let's Get Started</span>
            <IoMdArrowRoundForward size={20} />
          </Link>
        </div>

        <div className="mt-16 flex items-start gap-20">
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium">About Us</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <Link className="transition" to="/">
                  Company History
                </Link>
              </li>

              <li>
                <Link className="transition" to="/">
                  Meet the Team
                </Link>
              </li>

              <li>
                <Link className="transition" to="/">
                  Employee Handbook
                </Link>
              </li>

              <li>
                <Link className="transition" to="/">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium ">Helpful Links</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <Link className="transition" to="/">
                  FAQs
                </Link>
              </li>

              <li>
                <Link className="transition" to="/">
                  Support
                </Link>
              </li>

              <li>
                <Link
                  className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                  to="/"
                >
                  <span className="transition">Live Chat</span>

                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-white">
          <div className="mt-16 sm:flex sm:items-center sm:justify-between">
            <p className="mt-4 text-center text-sm text-teal-500 sm:mt-0 sm:text-right">
              Copyright Anthony Ukutegbe &copy; 2024. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
