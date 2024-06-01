import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import DrugCard from "./DrugCard";

export default function Trending() {
  return (
    <div className="trending w-full my-20 py-10 px-2">
      <div className="flex flex-col items-center">
        <h3 className="text-3xl md:text-5xl font-bold text-teal-950 text-center dark:text-orange-300">Featured Products</h3>
        <p className="text-teal-950 text-sm md:text-medium text-center dark:text-orange-300">Find products that are getting all the attention !!</p>
        <div className="cards mt-10 flex flex-wrap justify-center mx-auto gap-4 md:gap-10">
          {/* card 1 */}
         <DrugCard />

          {/* card 2 */}
         
          <DrugCard />

          {/* card 3 */}
          <DrugCard />


          {/* card 4 */}
          <DrugCard />

        </div>
      </div>
    </div>
  );
}
