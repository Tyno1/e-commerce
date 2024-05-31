import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FrequentlyAsked = () => {
  const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
      <div className="border border-teal-800 mb-2">
        <button
          className="flex justify-between w-full text-left text-teal-950 font-bold p-4 px-10 bg-teal-50 hover:bg-teal-800 hover:text-teal-50 rounded-t-lg focus:outline-none"
          onClick={onClick}
        >
          {title}
          <FaChevronDown size={20} />
        </button>
        <div
          className={`transition-all leading-normal text-lg duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-screen px-10 p-4" : "max-h-0"
          }`}
        >
          {content}
        </div>
      </div>
    );
  };

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "How long does shipping take?",
      content:
        "Shipping times vary depending on your location and the shipping method chosen at checkout. Standard shipping typically takes 5-7 business days within the continental United States. Expedited shipping options are also available for faster delivery. International shipping times may vary. You will receive a tracking number once your order has been shipped.",
    },
    {
      title: "What is your return policy?",
      content:
        "We offer a 30-day return policy for all our products. If you are not completely satisfied with your purchase, you can return it within 30 days of receiving it for a full refund or exchange. Please ensure the item is in its original condition and packaging. For more details, visit our Return Policy page.",
    },
    {
      title: "What payment methods do you accept?",
      content:
        "We accept a variety of payment methods to make your shopping experience as convenient as possible. These include major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay. All transactions are secure and encrypted to protect your information.",
    },
  ];

  return (
    <div className="Faq min-h-[70vh] w-[100%] my-20 py-10 md:px-20 bg-teal-950 flex flex-col items-center justify-center">
      <div className="top-section flex flex-col items-center">
        <p>FAQ</p>
        <h3 className="text-5xl font-bold text-center leading-tight text-teal-950 dark:text-white">
          Frequently Asked Questions
        </h3>
      </div>

      <div className="bottom-section w-full mx-auto p-10">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAsked;
