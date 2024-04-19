import React, { useEffect } from "react";
import DrugCard from "./DrugCard";
import ClipLoader from "react-spinners/ClipLoader";

const DrugList = ({
  drugLoading,
  drugError,
  drugs,
  setDrugs,
  pageNumber,
  setPageNumber,
  getDrugs,
}) => {
  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    getDrugs()
      .then((res) => {
        setDrugs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="druglist w-full h-full flex flex-row flex-wrap gap-4 p-2 items-center justify-around">
      {drugLoading && (
        <ClipLoader
          color="#000000"
          loading={drugLoading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      {drugError && <div> {drugError?.message} </div>}
      {drugs &&
        drugs?.length > 0 &&
        drugs?.map((drug) => <DrugCard key={drug._id} drug={drug} />)}

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
