import React from "react";

export default function QuantityButtonProduct({ optionValue, setOptionValue }) {
  const decrement = (e) => {
    e.preventDefault();
    if (optionValue && optionValue > 1) {
      setOptionValue(Math.max(parseInt(optionValue, 10) - 1, 0));
    }
  };

  const increment = (e) => {
    e.preventDefault();
    if (optionValue || optionValue === 0) {
      setOptionValue(parseInt(optionValue, 10) + 1);
    }
  };

  const displayValue = optionValue || 1;

  return (
    <div className="quantity flex w-[30%] h-12">
      <button
        className="h-full bg-orange-300 text-teal-950 w-[40%] rounded-l-lg"
        onClick={decrement}
      >
        -
      </button>
      <div className="w-full h-full text-teal-950 px-2 bg-white flex items-center justify-center">
        {displayValue}
      </div>
      <button
        className="h-full bg-orange-300 text-teal-950 w-[40%] rounded-r-lg"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
}
