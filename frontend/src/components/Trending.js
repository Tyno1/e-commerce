import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Trending() {
  return (
    <div className="trending w-full my-20 p-10">
      <div className="flex flex-col items-center">
        <h3 className="text-5xl font-bold text-teal-950 dark:text-orange-300">Featured Products</h3>
        <p className="text-teal-950 dark:text-orange-300">Find products that are getting all the attention !!</p>
        <div className="cards mt-10 flex flex-wrap justify-center mx-auto gap-10">
          {/* card 1 */}
          <div className="container max-w-sm h-96 flex w-60 rounded-lg text-teal-950 dark:bg-teal-950 shadow-2xl p-2 flex-col">
            <Link
              to="/shop"
              className="w-full p-2 border dark:border-orange-100 border-teal-900 rounded-lg h-[60%] cursor"
            >
              <div className="picture w-full bg-teal-900 rounded-lg h-full"></div>
            </Link>

            <div className="texts px-2 mt-2 flex flex-col h-[40%] justify-between  dark:text-teal-50 text-teal-950">
              <div className="top-texts">
                <p className="text-lg font-bold mb-2">
                  Drug Name
                </p>
                <p className="text-sm">
                  <span className="font-bold">Dose</span> - 100mg
                </p>
              </div>
              <div className="bottom-text mb-2 flex justify-between items-center">
                <strong className="text-lg">$108.38</strong>
                <button className="rounded-3xl bg-teal-900 h-10 w-10 flex items-center justify-center shadow-xl">
                  <BsFillCartFill size={20} className="dark:text-orange-300 text-white shadow" />
                </button>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="container max-w-sm h-96 flex w-60 rounded-lg text-teal-950 dark:bg-teal-950 shadow-2xl p-2 flex-col">
            <Link
              to="/shop"
              className="w-full p-2 border dark:border-orange-100 border-teal-900 rounded-lg h-[60%] cursor"
            >
              <div className="picture w-full bg-teal-900 rounded-lg h-full"></div>
            </Link>

            <div className="texts px-2 mt-2 flex flex-col h-[40%] justify-between  dark:text-teal-50 text-teal-950">
              <div className="top-texts">
                <p className="text-lg font-bold mb-2">
                  Drug Name
                </p>
                <p className="text-sm">
                  <span className="font-bold">Dose</span> - 100mg
                </p>
              </div>
              <div className="bottom-text mb-2 flex justify-between items-center">
                <strong className="text-lg">$108.38</strong>
                <button className="rounded-3xl bg-teal-900 h-10 w-10 flex items-center justify-center shadow-xl">
                  <BsFillCartFill size={20} className="dark:text-orange-300 text-white shadow" />
                </button>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="container max-w-sm h-96 flex w-60 rounded-lg text-teal-950 dark:bg-teal-950 shadow-2xl p-2 flex-col">
            <Link
              to="/shop"
              className="w-full p-2 border dark:border-orange-100 border-teal-900 rounded-lg h-[60%] cursor"
            >
              <div className="picture w-full bg-teal-900 rounded-lg h-full"></div>
            </Link>

            <div className="texts px-2 mt-2 flex flex-col h-[40%] justify-between  dark:text-teal-50 text-teal-950">
              <div className="top-texts">
                <p className="text-lg font-bold mb-2">
                  Drug Name
                </p>
                <p className="text-sm">
                  <span className="font-bold">Dose</span> - 100mg
                </p>
              </div>
              <div className="bottom-text mb-2 flex justify-between items-center">
                <strong className="text-lg">$108.38</strong>
                <button className="rounded-3xl bg-teal-900 h-10 w-10 flex items-center justify-center shadow-xl">
                  <BsFillCartFill size={20} className="dark:text-orange-300 text-white shadow" />
                </button>
              </div>
            </div>
          </div>

          {/* card 4 */}
          <div className="container max-w-sm h-96 flex w-60 rounded-lg text-teal-950 dark:bg-teal-950 shadow-2xl p-2 flex-col">
            <Link
              to="/shop"
              className="w-full p-2 border dark:border-orange-100 border-teal-900 rounded-lg h-[60%] cursor"
            >
              <div className="picture w-full bg-teal-900 rounded-lg h-full"></div>
            </Link>

            <div className="texts px-2 mt-2 flex flex-col h-[40%] justify-between  dark:text-teal-50 text-teal-950">
              <div className="top-texts">
                <p className="text-lg font-bold mb-2">
                  Drug Name
                </p>
                <p className="text-sm">
                  <span className="font-bold">Dose</span> - 100mg
                </p>
              </div>
              <div className="bottom-text mb-2 flex justify-between items-center">
                <strong className="text-lg">$108.38</strong>
                <button className="rounded-3xl bg-teal-900 h-10 w-10 flex items-center justify-center shadow-xl">
                  <BsFillCartFill size={20} className="dark:text-orange-300 text-white shadow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
