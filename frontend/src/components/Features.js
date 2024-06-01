import React from "react";
import { IoMdSettings } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Features() {
  const navigate = useNavigate();
  return (
    <div className="mt-10">
      <h3 className="text-3xl md:text-5xl font-bold text-teal-950 text-center dark:text-orange-300 mb-4">
        Why Choose Us?{" "}
      </h3>
      <div class="flex flex-wrap justify-center gap-8 items-center">
        {/* <!-- card 1 --> */}
        <div class="max-w-sm h-60 flex w-[80%] md:w-60 dark:text-teal-50 text-teal-900 p-6 flex-col justify-between items-center ">
          <div className="text-center md:text-left">
            <IoMdSettings
              className="dark:text-orange-300 mx-auto md:mx-0"
              size="25"
            />
            <h3 className="title text-sm py-2 font-bold">Secure Payment</h3>
            <p className="text-sm">
              We provide a secure payment system that ensures your transactions
              are safe and protected from fraud.
            </p>
          </div>
          <button
            onClick={() => navigate("/about")}
            className="w-[80%] md:w-full text-sm cursor flex gap-4 justify-between dark:text-orange-300 "
          >
            <button>Read more...</button>
            <FaArrowRight />
          </button>
        </div>
        <div className="hidden lg:block border-[1px] h-52 dark:border-orange-100 border-teal-900"></div>
        {/* <!-- card 2 --> */}
        <div class="max-w-sm h-60 flex w-[80%] md:w-60 dark:text-teal-50 text-teal-900 p-6 flex-col justify-between items-center">
          <div className="text-center md:text-left">
            <IoMdSettings
              className="dark:text-orange-300 mx-auto md:mx-0"
              size="25"
            />
            <h3 className="title text-sm py-2 font-bold">Free Shipping</h3>
            <p className="text-sm">
              Enjoy free shipping on all orders with no minimum purchase
              required. Fast and reliable delivery to your doorstep.
            </p>
          </div>
          <button
            onClick={() => navigate("/about")}
            className="w-[80%] md:w-full text-sm cursor flex gap-4 justify-between dark:text-orange-300 "
          >
            <button>Read more...</button>
            <FaArrowRight />
          </button>
        </div>
        <div className="hidden lg:block border-[1px] h-52 dark:border-orange-100 border-teal-900"></div>

        {/* <!-- card 3 --> */}
        <div class="max-w-sm h-60 flex w-[80%] md:w-60 dark:text-teal-50 text-teal-900 p-6 flex-col justify-between items-center">
          <div className="text-center md:text-left">
            <IoMdSettings
              className="dark:text-orange-300 mx-auto md:mx-0"
              size="25"
            />
            <h3 className="title text-sm py-2 font-bold">24/7 Support</h3>
            <p className="text-sm">
              Our support team is available 24/7 to assist you with any
              inquiries or issues you may have.
            </p>
          </div>
          <button
            onClick={() => navigate("/about")}
            className="w-[80%] md:w-full text-sm cursor flex gap-4 justify-between dark:text-orange-300 "
          >
            <button>Read more...</button>
            <FaArrowRight />
          </button>
        </div>
        <div className="hidden lg:block border-[1px] h-52 dark:border-orange-100 border-teal-900"></div>

        {/* <!-- card 4 --> */}
        <div class="max-w-sm h-60 flex w-[80%] md:w-60 dark:text-teal-50 text-teal-900 p-6 flex-col justify-between items-center">
          <div className="text-center md:text-left">
            <IoMdSettings
              className="dark:text-orange-300 mx-auto md:mx-0"
              size="25"
            />
            <h3 className="title text-sm py-2 font-bold">
              Medically Certified
            </h3>
            <p className="text-sm">
              All our products are medically certified to ensure the highest
              standards of safety and efficacy for our customers.
            </p>
          </div>
          <button
            onClick={() => navigate("/about")}
            className="w-[80%] md:w-full text-sm cursor flex gap-4 justify-between dark:text-orange-300 "
          >
            <button>Read more...</button>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
