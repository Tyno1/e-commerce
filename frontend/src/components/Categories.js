import React from "react";
import { RiMedicineBottleFill } from "react-icons/ri";

export default function Categories({
  loading,
  error,
  categories,
  setCategoryId,
  setSelectedCategory,
  selectedCategory,
  setPageNumber,
  setIsSearched,
  isSearched,
  getDrugs,
}) {
  return (
    <div className="categories bg-gray-50 dark:bg-teal-950 border border-teal-900 rounded-xl w-full min-h-[70vh]">
      {loading && <div>Loading...</div>}
      {error && <div>{error?.message}</div>}
      {categories && (
        <div className="flex flex-col no-wrap gap-2 p-2">
          <button
            onClick={() => {
              setCategoryId("");
              setSelectedCategory("");
              setPageNumber(1);
              getDrugs();
            }}
            className="hover:bg-teal-800 shadow-2xl flex p-4 rounded-lg gap-6 items-center text-sm justify-center w-full min-h-14 text-teal-900 dark:text-gray-50 dark:bg-teal-950 bg-gray-100"
          >
            View All
          </button>
          {categories.map((category) => (
            <button
              onClick={() => {
                setCategoryId(category._id);
                setSelectedCategory(category._id);
                setIsSearched(false);
                setPageNumber(1);
              }}
              key={category._id}
              className={`flex p-4 rounded-lg gap-4 min-h-14 items-center shadow-2xl hover:bg-teal-800 ${
                selectedCategory === category._id
                  ? "dark:bg-orange-300 dark:text-teal-950 text-teal-50 bg-teal-950"
                  : "text-teal-900 dark:text-teal-50 dark:bg-teal-950 bg-gray-100"
              }`}
            >
              <div>
                <RiMedicineBottleFill size={20} />
              </div>
              <h2 className="text-sm text-wrap text-start">{category.name}</h2>
            </button>
          ))}
          <button
            onClick={() => {
              setCategoryId("");
              setSelectedCategory("");
              setPageNumber(1);
              getDrugs();
            }}
            className="hover:bg-teal-800 flex shadow-2xl p-2 rounded-lg gap-6 text-sm items-center justify-center w-full mb-2 min-h-14 text-teal-900 dark:text-gray-50 dark:bg-teal-950 bg-gray-100"
          >
            View All
          </button>
        </div>
      )}
    </div>
  );
}
