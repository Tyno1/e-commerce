import React from "react";
import { RiMedicineBottleFill } from "react-icons/ri";

export default function Categories({
  loading,
  error,
  categories,
  setCategoryId,
  setSelectedCategory,
  selectedCategory,
}) {
  return (
    <div className="categories bg-gray-50 dark:bg-teal-900 rounded-xl w-72 min-h-[70vh] p-2">
      {loading && <div>Loading...</div>}
      {error && <div>{error?.message}</div>}
      {categories && (
        <div className="flex flex-col no-wrap p-2">
          {categories.map((category) => (
            <button
              onClick={() => {
                setCategoryId(category._id);
                setSelectedCategory(category.name);
              }}
              key={category._id}
              className={`flex p-2 rounded-lg gap-6 items-start w-full mb-2 min-h-14 items-center ${
                selectedCategory === category.name
                  ? "bg-orange-500"
                  : "text-teal-900 dark:text-gray-50 dark:bg-teal-950 bg-gray-100"
              }`}
            >
              <div>
                <RiMedicineBottleFill size={20} />
              </div>
              <h2 className="text-sm text-wrap text-start">{category.name}</h2>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
