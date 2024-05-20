import React, { useEffect } from "react";
import DrugCard from "./DrugCard";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";

const DrugList = ({
  drugLoading,
  drugError,
  drugs,
  setDrugs,
  pageNumber,
  setPageNumber,
  getDrugs,
  setCategoryId,
  meta,
}) => {
  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    } else {
      toast("There are no more drugs to display", { hideProgressBar: true });
    }
  };

  const handleNextPage = () => {
    console.log(meta);
    if (Number(meta?.currentPage) < meta?.pages) {
      setPageNumber(pageNumber + 1);
    } else {
      toast("There are no more drugs to display", { hideProgressBar: true });
    }
  };

  return (
    <div className="container w-full h-full flex flex-col flex-wrap gap-4 p-2 items-center justify-around">
      {(drugLoading && (
        <div className="mx-auto">
          <ClipLoader
            color="#000000"
            loading={drugLoading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )) ||
        (drugError && <div> {drugError?.message} </div>) ||
        (drugs && drugs?.length > 0 && (
          <div className="druglist w-full h-full flex flex-row flex-wrap gap-4 p-2 items-center justify-around">
            {drugs?.map((drug) => (
              <DrugCard
                key={drug._id}
                drug={drug}
                setCategoryId={setCategoryId}
              />
            ))}
          </div>
        ))}
      <div className="mx-auto flex gap-10 my-10">
        <button
          onClick={handlePreviousPage}
          className="bg-teal-950 p-4 rounded-lg text-white"
        >
          Previous Page
        </button>
        <button
          onClick={handleNextPage}
          className="bg-teal-950 p-4 rounded-lg text-white dark:"
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default DrugList;
