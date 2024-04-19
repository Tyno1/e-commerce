import React from "react";

export default function QuantityButton({
  id,
  initial,
  optionValues,
  setOptionValues,
  optionValue,
  setOptionValue,
  updateCartItems,
}) {
  return (
    <div className="quantity flex w-[30%] h-12">
      <button
        className="h-full bg-orange-300 text-teal-950 w-[40%] rounded-l-lg"
        onClick={(e) => {
          e.preventDefault();
          if (optionValue && optionValue > 0) {
            setOptionValue(parseInt(initial || optionValue) - 1);
          } else if (optionValues) {
            updateCartItems(parseInt(optionValues[id] || initial) - 1);
            setOptionValues({
              ...optionValues,
              [id]: parseInt(optionValues[id] || initial) - 1,
            });
          }
        }}
      >
        -
      </button>
      <div className="w-full h-full text-teal-950 px-2 bg-white flex items-center justify-center">
        {optionValues && optionValues[id]
          ? optionValues[id]
          : initial && initial > 0
          ? optionValue > 0
            ? optionValue
            : initial
          : optionValue}
      </div>

      <button
        className="h-full bg-gray-200 bg-orange-300 text-teal-950 w-[40%] rounded-r-lg"
        onClick={(e) => {
          e.preventDefault();
          if (optionValue || optionValue === 0) {
            setOptionValue(parseInt(initial || optionValue) + 1);
          } else if (optionValues) {
            updateCartItems(parseInt(optionValues[id] || initial) + 1);
            setOptionValues({
              ...optionValues,
              [id]: parseInt(optionValues[id] || initial) + 1,
            });
          }
        }}
      >
        +
      </button>
    </div>
  );
}
