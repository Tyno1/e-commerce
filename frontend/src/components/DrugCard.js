import React, { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const DrugCard = ({
  drug,
  widthStyle = "w-52",
  setCategoryId,
  user,
  AddToCart,
  setPostResp,
}) => {
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    userId: user?.user?._id,
    drugId: "",
    quantity: "",
  });

  const handleAddToCart = (e) => {
    e.preventDefault();

    const newPayload = {
      ...payload,
      drugId: drug._id,
      quantity: 1,
    };
    AddToCart(newPayload)
      .then((res) => {
        setPostResp(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const titleCase = (str) => {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  };

  return (
    <div
      className={`container max-w-sm h-72 flex ${widthStyle} rounded-lg text-teal-950 relative dark:bg-teal-950 shadow-2xl p-2 flex-col dark:hover:bg-teal-800`}
    >
      <button
        onClick={handleAddToCart}
        className="rounded-3xl bg-teal-900 h-7 w-7 hover:h-10 hover:w-10 flex items-center absolute bottom-4 right-4 justify-center shadow-xl"
      >
        <BsFillCartFill
          size={10}
          className="dark:text-orange-300 text-white shadow"
        />
      </button>
      <div
        className="w-full h-full cursor-pointer"
        onClick={() => {
          setCategoryId(drug?.category?._id);
          navigate(`/drugs/${drug?._id}`);
        }}
      >
        <div className="w-full p-2 border dark:border-orange-100 border-teal-900 rounded-lg h-[60%] cursor">
          <div className="image-container w-full bg-teal-900 rounded-lg h-full">
            <img
              src={drug?.imageUrl}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>

        <div className="texts px-2 mt-2 flex flex-col h-[40%] w-full justify-between dark:text-teal-50 text-teal-950">
          <div className="top-texts">
            <p className="text-sm font-bold mb-2 truncate">
              {titleCase(drug?.name)}
            </p>
            <p className="text-sm">
              <span className="font-bold">Dose</span> - {drug?.dose}
            </p>
          </div>
          <div className="bottom-text mb-2 flex justify-between items-center">
            <strong className="text-lg">
              {drug?.price && (
                <div className="text-sm">
                  <span>{drug?.price.currency && "£"}</span>{" "}
                  <span>{drug?.price.amount}</span>
                </div>
              )}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrugCard;
