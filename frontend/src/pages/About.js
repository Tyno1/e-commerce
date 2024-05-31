import React from "react";
import about1 from "../images/toa-heftiba-FV3GConVSss-unsplash.jpg";
import about2 from "../images/cherrydeck-A44EW3n2PgM-unsplash.jpg";

export default function About() {
  return (
    <div className="pt-40 md:pt-32 w-full min-h-[100vh] flex flex-col gap-20">
      {/* section 1 */}
      <div className="sectin-1 flex flex-col md:flex-row w-full items-center justify-center gap-20 p-4">
        <div className=" flex flex-col w-full md:w-[40%] gap-20">
          <div className="gap-4 flex flex-col">
            <h3 className="text-5xl font-bold text-right leading-tight text-teal-950 dark:text-orange-300">
              About Us
            </h3>
            <p className="leading-normal text-xl text-justify">
              Welcome to MediKart, your trusted online pharmacy dedicated to
              making your healthcare needs easily accessible and convenient. We
              are committed to providing you with a seamless shopping experience
              where you can find and purchase the medications you need, all from
              the comfort of your home.
            </p>
          </div>
          <div className="gap-4 flex flex-col">
            <h3 className="text-5xl font-bold text-left leading-tight text-teal-950 dark:text-orange-300">
              Our Mission
            </h3>
            <p className="leading-normal text-xl text-justify">
              At MediKart, our mission is to simplify the process of getting
              your medications. We believe that everyone deserves easy and
              reliable access to healthcare products. Our goal is to make sure
              you receive your medications quickly, safely, and efficiently,
              without any hassle.
            </p>
          </div>
        </div>

        <div className="image-container h-[70vh] w-full md:w-[30%] rounded-2xl">
          <img
            className="w-full h-full object-cover object-center rounded-2xl"
            src={about1}
            alt=""
          />
        </div>
      </div>
      {/* section 2 */}
      <div className="sectin-1 flex flex-col md:flex-row w-full items-center justify-center gap-20 p-4">
        <div className="image-container h-[100vh] w-full md:w-[30%] rounded-2xl">
          <img
            className="w-full h-full object-cover object-center rounded-2xl"
            src={about2}
            alt=""
          />
        </div>

        <div className=" flex flex-col w-full md:w-[40%] gap-20">
          <div className="gap-4 flex flex-col">
            <h3 className="text-5xl font-bold text-right leading-tight text-teal-950 dark:text-orange-300">
              What We Offer
            </h3>
            <ul className="leading-normal text-xl text-justify flex flex-col gap-10">
              <li>
                <span className="font-bold text-orange-300">
                  Wide Selection of Medications:{" "}
                </span>
                We offer a comprehensive range of pharmaceutical products, from
                prescription medications to over-the-counter drugs. Whatever
                your healthcare needs, we have you covered.
              </li>

              <li>
                <span className="font-bold text-orange-300">
                  User-Friendly Shopping:{" "}
                </span>
                Our website is designed to be intuitive and easy to navigate,
                ensuring you can find what you're looking for quickly and
                effortlessly.
              </li>

              <li>
                <span className="font-bold text-orange-300">
                  Secure and Confidential:{" "}
                </span>
                Your privacy and security are our top priorities. We ensure that
                your personal information and medical data are kept safe and
                confidential at all times.
              </li>

              <li>
                <span className="font-bold text-orange-300">
                  Customer Reviews:{" "}
                </span>
                We value your feedback. Our platform allows you to read and
                leave reviews on the medications you purchase, helping others
                make informed decisions.
              </li>
            </ul>
          </div>
          <div className="gap-4 flex flex-col">
            <h3 className="text-5xl font-bold text-left leading-tight text-teal-950 dark:text-orange-300">
              Our Commitment
            </h3>
            <p className="leading-normal text-xl text-justify">
              MediKart is dedicated to improving your health and wellbeing by
              making medication access as simple and stress-free as possible. We
              strive to offer the best in customer service and satisfaction,
              ensuring you get the care and support you need. Thank you for
              choosing MediKart. We look forward to serving you and helping you
              stay healthy and happy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
