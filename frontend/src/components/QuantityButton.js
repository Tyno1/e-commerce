import React, { useState } from "react";

export default function QuantityButton({
  id,
  initial,
  optionValues,
  setOptionValues,
  optionValue,
  setOptionValue,
  updateCartItems,
  handleDelete,
}) {
  const [values, setValues] = useState(optionValues)

  const decrement = (e) => {
    e.preventDefault();
    if (optionValue  && optionValue > 0) {
      setOptionValue(Math.max(parseInt(optionValue, 10) - 1, 0));
    } else if (optionValues) {
      const newValue = Math.max(
        parseInt(optionValues[id] || initial, 10) - 1,
        0
      );
      updateCartItems(newValue);
      setOptionValues({
        ...optionValues,
        [id]: newValue,
      });

      setValues({
        ...optionValues,
        [id]: newValue,
      });
    }
  };

  const increment = (e) => {
    e.preventDefault();
    if (optionValue || optionValue === 0) {
      setOptionValue(parseInt(optionValue, 10) + 1);
    } else if (optionValues) {
      const newValue = parseInt(optionValues[id] || initial, 10) + 1;
      updateCartItems(newValue);
      setOptionValues({
        ...optionValues,
        [id]: newValue,
      });

      setValues({
        ...optionValues,
        [id]: newValue,
      });
    }
  };

  const displayValue =
    values && values[id]
      ? values[id]
      : optionValue > 0
      ? optionValue
      : initial || 0;

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
