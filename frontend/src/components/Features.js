import React from "react";
import { IoMdSettings } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Features() {
  return (
    <div class="flex flex-wrap justify-center mt-10 gap-8 items-center">
      {/* <!-- card 1 --> */}
      <div class="max-w-sm h-72 flex w-60 dark:text-teal-50 text-teal-900 p-6 flex-col justify-between">
        <div>
          <IoMdSettings className="dark:text-orange-300" size="25" />
          <h3 className="title text-sm py-2 font-bold">Secure Payment</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nemo
            aspernatur a totam beatae.
          </p>
        </div>
        <div>
          <Link
            to="/about"
            className="text-sm cursor flex gap-4 justify-between dark:text-orange-300 "
          >
            <button>Read more...</button>
            <FaArrowRight />
          </Link>
        </div>
      </div>
      <div className="hidden lg:block border-[1px] h-52 dark:border-orange-100 border-teal-900"></div>
      {/* <!-- card 2 --> */}
      <div class="max-w-sm h-72 flex w-60 dark:text-teal-50 text-teal-900 p-6 flex-col justify-between">
        <div>
          <IoMdSettings className="dark:text-orange-300"  size="25" />
          <h3 className="title text-sm py-2 font-bold">Free Shipping</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nemo
            aspernatur a totam beatae.
          </p>
        </div>
        <div>
          <Link
            to="/about"
            className="text-sm cursor flex gap-4 justify-between dark:text-orange-300"
          >
            <button>Read more...</button>
            <FaArrowRight />
          </Link>
        </div>
      </div>
      <div className="hidden lg:block border-[1px] h-52 dark:border-orange-100 border-teal-900"></div>

      {/* <!-- card 3 --> */}
      <div class="max-w-sm h-72 flex w-60 dark:text-teal-50 text-teal-900 p-6 flex-col justify-between">
        <div>
          <IoMdSettings className="dark:text-orange-300"  size="25" />
          <h3 className="title text-sm py-2 font-bold">24/7 Support</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nemo
            aspernatur a totam beatae.
          </p>
        </div>
        <div>
          <Link
            to="/about"
            className="text-sm cursor flex gap-4 justify-between dark:text-orange-300"
          >
            <button>Read more...</button>
            <FaArrowRight />
          </Link>
        </div>
      </div>
      <div className="hidden lg:block border-[1px] h-52 dark:border-orange-100 border-teal-900"></div>

      {/* <!-- card 4 --> */}
      <div class="max-w-sm h-72 flex w-60  dark:text-teal-50 text-teal-900 p-6 flex-col justify-between">
        <div>
          <IoMdSettings className="dark:text-orange-300"  size="25" />
          <h3 className="title text-sm py-2 font-bold">Medically Certified</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nemo
            aspernatur a totam beatae.
          </p>
        </div>
        <div>
          <Link
            to="/about"
            className="text-sm cursor flex gap-4 justify-between dark:text-orange-300"
          >
            <button>Read more...</button>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
