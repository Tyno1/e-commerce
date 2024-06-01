import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import image1 from "../images/profile-pictures/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";
import image2 from "../images/profile-pictures/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";
import image3 from "../images/profile-pictures/prince-akachi-i2hoD-C2RUA-unsplash.jpg";
import image4 from "../images/profile-pictures/foto-sushi-6anudmpILw4-unsplash.jpg";
import { CgArrowsHAlt } from "react-icons/cg";

const Testimonials = () => {
  return (
    <div className="trending min-h-[70vh] w-[100%] py-10 bg-teal-950 dark:bg-teal-900 ">
      <div className="flex flex-col items-center h-full ">
        <div className="px-6 leading-6">
          <h3 className="text-3xl md:text-5xl font-bold text-center leading-tight text-white">
            What Are <span className="dark:text-orange-300">Customers </span>
            Saying?
          </h3>
          <p className="text-teal-950 text-center text-white mt-2">
            Here's a sneak peak at the beautiful things our customers are saying
            about our platform and services.
          </p>
        </div>

        <div className="cards mt-10 flex h-full w-full gap-10 overflow-x-auto">
          {/* card 1 */}
          <div className="bg-white p-8 min-w-[400px] md:min-w-[500px] min-h-[350px] rounded shadow-lg flex flex-col justify-between">
            <p className="text text-teal-950 w-full">
              "This website has become my go-to for all my medical needs. The
              detailed product descriptions and customer reviews helped me make
              informed decisions. Plus, the customer service is exceptional –
              they promptly answered all my questions. A fantastic experience
              overall!˝
            </p>
            <div className="bottom-section flex justify-between items-center">
              <div className="client-profile flex gap-4 items-center">
                <div className="image-container w-20 h-20 rounded-2xl">
                  <img
                    className="w-full h-full object-cover object-center rounded-2xl"
                    src={image1}
                    alt="User1_Image"
                  />
                </div>
                <div>
                  <p className="client-name text-teal-950 text-lg font-bold">
                    Katty Williams
                  </p>
                  <p className="text-teal-950 text-sm">Wales, United Kingdom</p>
                </div>
              </div>

              <div className="quote-icon">
                <FaQuoteRight size={60} className="text-teal-700" />
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="bg-white p-8 min-w-[400px] md:min-w-[500px] min-h-[350px] rounded shadow-lg flex flex-col justify-between">
            <p className="text text-teal-950 w-full">
              "I was skeptical about buying medical supplies online, but this
              site exceeded my expectations. The secure payment options and
              clear privacy policies gave me confidence in my purchase. Highly
              recommend!"
            </p>
            <div className="bottom-section flex justify-between items-center">
              <div className="client-profile flex gap-4 items-center">
                <div className="image-container w-20 h-20 rounded-2xl">
                  <img
                    className="w-full h-full object-cover object-center rounded-2xl"
                    src={image2}
                    alt="User1_Image"
                  />
                </div>
                <div>
                  <p className="client-name text-teal-950 text-lg font-bold">
                    Frank Gazzelle
                  </p>
                  <p className="text-teal-950 text-sm">
                    London, United Kingdom
                  </p>
                </div>
              </div>

              <div className="quote-icon">
                <FaQuoteRight size={60} className="text-teal-700" />
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="bg-white p-8 min-w-[400px] md:min-w-[500px] min-h-[350px] rounded shadow-lg flex flex-col justify-between">
            <p className="text text-teal-950 w-full">
              "I am thoroughly impressed with this medical e-commerce platform.
              The range of products available is extensive, and I found
              everything I needed without any hassle. This site has made
              purchasing medical supplies online a breeze!"
            </p>
            <div className="bottom-section flex justify-between items-center">
              <div className="client-profile flex gap-4 items-center">
                <div className="image-container w-20 h-20 rounded-2xl">
                  <img
                    className="w-full h-full object-cover object-center rounded-2xl"
                    src={image3}
                    alt="User1_Image"
                  />
                </div>
                <div>
                  <p className="client-name text-teal-950 text-lg font-bold">
                    Amaka Freda
                  </p>
                  <p className="text-teal-950 text-sm">
                    Liverpool, United Kingdom
                  </p>
                </div>
              </div>

              <div className="quote-icon">
                <FaQuoteRight size={60} className="text-teal-700" />
              </div>
            </div>
          </div>

          {/* card 4 */}
          <div className="bg-white p-8 min-w-[400px] md:min-w-[500px] min-h-[350px] rounded shadow-lg flex flex-col justify-between">
            <p className="text text-teal-950 w-full">
              " The layout is intuitive, and finding the products I needed was
              simple. The detailed information and reviews on each product page
              helped me feel confident in my choices. "
            </p>
            <div className="bottom-section flex justify-between items-center">
              <div className="client-profile flex gap-4 items-center">
                <div className="image-container w-20 h-20 rounded-2xl">
                  <img
                    className="w-full h-full object-cover object-center rounded-2xl"
                    src={image4}
                    alt="User1_Image"
                  />
                </div>
                <div>
                  <p className="client-name text-teal-950 text-lg font-bold">
                    Martin Gondales
                  </p>
                  <p className="text-teal-950 text-sm">
                    Liverpool, United Kingdom
                  </p>
                </div>
              </div>

              <div className="quote-icon">
                <FaQuoteRight size={60} className="text-teal-700" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-sm md:text-xl flex flex-row items-center gap-5 text-teal-100" >
          <p>Slide and Explore</p>
          <CgArrowsHAlt size={30} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
