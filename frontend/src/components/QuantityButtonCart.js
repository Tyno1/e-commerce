import React, { useEffect, useState } from "react";

const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

export default function QuantityButtonCart({ id, initial, updateCartItems }) {
  const [values, setValues] = useState({ [id]: initial });

  const decrement = (e) => {
    e.preventDefault();
    if (values && values[id] > 1) {
      const newValue = parseInt(values[id], 10) - 1;
      setValues({
        ...values,
        [id]: newValue,
      });
    }
  };

  const increment = (e) => {
    e.preventDefault();
    if (values) {
      const newValue = parseInt(values[id], 10) + 1;
      setValues({
        ...values,
        [id]: newValue,
      });
    }
  };

  const debounceRequest = debounce(() => {
    updateCartItems(values[id]);
  }, 3000);

  useEffect(() => {
    if (values[id] > 1) {
      debounceRequest();
    }
  }, [values]);

  return (
    <div className="quantity flex w-[30%] h-12">
      <button
        className="h-full bg-orange-300 text-teal-950 w-[40%] rounded-l-lg"
        onClick={decrement}
      >
        -
      </button>
      <div className="w-full h-full text-teal-950 px-2 bg-white flex items-center justify-center">
        {values && values[id] ? values[id] : initial}
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
