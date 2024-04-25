import React, { useContext, useEffect, useState } from "react";
import CallToAction from "../components/CallToAction";
import Trending from "../components/Trending";
import Categories from "../components/Categories";
import { CategoryContext } from "../contexts/CategoryContext";
import DrugList from "../components/DrugList";
import { DrugContext } from "../contexts/DrugContext";

export default function Shop() {
  const { loading, error, categories } = useContext(CategoryContext);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const {
    loading: drugLoading,
    error: drugError,
    drugs,
    setDrugs,
    pageNumber,
    setPageNumber,
    getDrugs,
    setCategoryId,
    categoryId
  } = useContext(DrugContext);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };
  useEffect(() => setSelectedCategory(categoryId), []);
  return (
    <div className="pt-20 w-full">
      <div className="w-full min-h-[100vh] pt-10 flex flex-col items-center">
        <form className="px-10 search-bar min-w-full md:min-w-[80%] lg:min-w-[70%] flex items-center">
          <input
            className="flex grow rounded-lg bg-teal-50 text-teal-950 px-4 py-3 focus:outline-teal-800 border-2 border-gray-300"
            type="text"
            name="search"
            value={searchInput}
            onChange={handleSearchChange}
            placeholder="search drugs, categories, manufacturers"
          />
          <button className="ml-4 shadow-xl border border-2 bg-teal-900 dark:bg-teal-950 border-orange-300 text-orange-300 rounded-xl px-6 py-3 focus:outline-none active:bg-teal-800 active:text-orange-300">
            search
          </button>
        </form>
        <div className="flex min-h-[100vh] w-full p-4 items-start">
          <div className="w-[18%] flex flex-col gap-4">
            <Categories
              loading={loading}
              error={error}
              categories={categories}
              setCategoryId={setCategoryId}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>

          <div className="bg-gray-50 dark:bg-teal-800 rounded-xl ml-2 h-[100%] w-[85%] ">
            <DrugList
              drugError={drugError}
              drugLoading={drugLoading}
              drugs={drugs}
              setDrugs={setDrugs}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              getDrugs={getDrugs}
            />
          </div>
        </div>
      </div>

      <div className="shop-container px-10"></div>
      <Trending />
      <CallToAction />
    </div>
  );
}
