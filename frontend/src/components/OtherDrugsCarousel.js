import React from "react";
import DrugCard from "./DrugCard";

export default function OtherDrugsCarousel({ drugsByCategory }) {
  return (
    <div className="w-[100%] h-full overflow-hidden no-wrap">
      <div className="w-full h-[50vh] bg-teal-900 rounded-2xl flex flex-col p-4">
        <p className="text-2xl font-bold">More Drugs Like This</p>

        {drugsByCategory && drugsByCategory?.length > 0 && (
          <div className="flex flex-row p-4 gap-4 overflow-scroll rounded-2xl">
            {drugsByCategory?.map((drug) => (
              <DrugCard widthStyle="min-w-52" key={drug._id} drug={drug} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
