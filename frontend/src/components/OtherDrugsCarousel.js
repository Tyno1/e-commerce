import React from "react";
import DrugCard from "./DrugCard";

export default function OtherDrugsCarousel({
  drugsByCategory,
  setCategoryId,
  AddToCart,
  setPostResp,
  user,
}) {
  return (
    <div className="w-[100%] h-full overflow-hidden no-wrap text-teal-900 dark:text-white">
      <div className="w-full h-[60vh] bg-white dark:bg-teal-900 rounded-2xl flex flex-col justify-center p-4">
        <p className="text-2xl font-bold">More Drugs Like This</p>

        {drugsByCategory && drugsByCategory?.length > 0 && (
          <div className="flex flex-row p-4 gap-4 overflow-x-auto rounded-2xl">
            {drugsByCategory?.map((drug) => (
              <DrugCard
                widthStyle="min-w-40 md:min-w-48"
                key={drug._id}
                drug={drug}
                setCategoryId={setCategoryId}
                AddToCart={AddToCart}
                setPostResp={setPostResp}
                user={user}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
