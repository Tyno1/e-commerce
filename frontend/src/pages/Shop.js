import React, { useContext, useEffect, useState } from "react";
import CallToAction from "../components/CallToAction";
import Trending from "../components/Trending";
import Categories from "../components/Categories";
import { CategoryContext } from "../contexts/CategoryContext";
import DrugList from "../components/DrugList";
import { DrugContext } from "../contexts/DrugContext";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import { CartContext } from "../contexts/CartContext";

export default function Shop() {
  const { user } = useContext(AuthContext);
  const { AddToCart, getCartItemsByUserId, setCartItem } =
    useContext(CartContext);
  const [postResp, setPostResp] = useState("");
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
    getDrugsByName,
    setCategoryId,
    isSearched,
    setIsSearched,
    meta,
  } = useContext(DrugContext);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value.trim());
    console.log(searchInput);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.length > 0) {
      getDrugsByName(searchInput.trim())
        .then((res) => {
          console.log(res.data);
          setIsSearched(true);
        })
        .catch((err) => {
          console.log(err);
          setIsSearched(false);
          toast(err?.response.data.error, { hideProgressBar: true });
        });
    }
  };
  useEffect(() => {
    const query = window.location.search.split("=");
    if (query.length > 0 && query.every((v) => v.length > 0)) {
      setCategoryId(query[query.length - 1]);
      setSelectedCategory(query[query.length - 1]);
    } else {
      setCategoryId("");
    }
  }, []);

  useEffect(() => {
    getCartItemsByUserId(user?.user._id)
      .then((res) => {
        setCartItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [postResp]);
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
          <button
            onClick={handleSearchSubmit}
            className="ml-4 shadow-xl border border-2 bg-teal-900 dark:bg-teal-950 border-orange-300 text-orange-300 rounded-xl px-6 py-3 focus:outline-none active:bg-teal-800 active:text-orange-300"
          >
            search
          </button>
        </form>

        <div className="flex min-h-[100vh] w-full p-4 items-start">
          <div className="w-[250px] hidden md:flex flex-col gap-4 ">
            <Categories
              loading={loading}
              error={error}
              categories={categories}
              setCategoryId={setCategoryId}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              setPageNumber={setPageNumber}
              setIsSearched={setIsSearched}
              isSearched={isSearched}
              getDrugs={getDrugs}
            />
          </div>

          <div className="bg-gray-50 dark:bg-teal-950 rounded-xl ml-2 h-[100%] w-full md:w-[85%] border border-teal-900">
            <DrugList
              setPostResp={setPostResp}
              AddToCart={AddToCart}
              user={user}
              drugError={drugError}
              drugLoading={drugLoading}
              drugs={drugs}
              setDrugs={setDrugs}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              getDrugs={getDrugs}
              setCategoryId={setCategoryId}
              meta={meta}
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
