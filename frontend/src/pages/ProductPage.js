import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DrugContext } from "../contexts/DrugContext";
import { IoMdStar } from "react-icons/io";
import Review from "../components/Review";
import { ReviewContext } from "../contexts/reviewContext";
import ReviewUpload from "../components/ReviewUpload";
import { AuthContext } from "../contexts/AuthContext";
import useFetch from "../hooks/useFetch";
import { CartContext } from "../contexts/CartContext";
import QuantityButton from "../components/QuantityButton";
import DeliverySideSection from "../components/DeliverySideSection";
import { useNavigate } from "react-router-dom";
import OtherDrugsCarousel from "../components/OtherDrugsCarousel";

export default function ProductPage() {
  const { id } = useParams();
  const [drug, setDrug] = useState();
  const {
    getDrugsById,
    getDrugs,
    categoryId,
    loading,
    error,
    setCategoryId,
    drugs,
    getDrugsByCategory,
    drugsByCategory,
    setDrugsByCategory,
  } = useContext(DrugContext);
  const { user } = useContext(AuthContext);
  const { sendReview } = useContext(ReviewContext);
  const [optionValue, setOptionValue] = useState(1);

  const navigate = useNavigate();

  const {
    AddToCart,
    getCartItemsByUserId,
    setCartItem,
    cartItem,
    tempPayload,
    setTempPayload,
    setCartCount,
  } = useContext(CartContext);
  const [postResp, setPostResp] = useState("");
  const [payload, setPayload] = useState({
    userId: user?.user?._id,
    drugId: "",
    quantity: "",
  });
  const {
    loading: reviewLoading,
    error: reviewError,
    data: reviews,
    refresh,
  } = useFetch(
    `${process.env.REACT_APP_BACKEND_SERVER_URL}/reviews/drug/${id}`
  );

  const handleAddToCart = (e) => {
    e.preventDefault();
    setTempPayload({
      payload: {
        userId: user?.user?._id,
        drugId: drug._id,
        quantity: optionValue,
      },
    });
  };

  useEffect(() => {}, []);

  const handleByCategory = (drug) => {
    navigate(`/shop?category=${drug.category._id}`);
  };

  useEffect(() => {
    if (tempPayload && tempPayload.payload.quantity) {
      setCartCount(() => {
        console.log(tempPayload);
        let tempPayloadQuantity = tempPayload?.payload.quantity || 0;
        let cartItemCount = 0;
        if (cartItem && cartItem.length > 0) {
          const sumOfQuantities = cartItem
            .map((item) => item.quantity)
            .reduce((acc, val) => acc + val, 0);
          cartItemCount = sumOfQuantities;
        }
        return tempPayloadQuantity + cartItemCount;
      });

      AddToCart(tempPayload.payload)
        .then((res) => {
          setPostResp(res.data);
          setTempPayload({ payload: {} });
        })
        .catch((err) => {
          console.error(err.message);
          setTempPayload({ payload: {} });
        });
    }
  }, [tempPayload]);

  useEffect(() => {
    getDrugsByCategory(categoryId)
      .then((res) => {
        setDrugsByCategory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryId]);

  useEffect(() => {
    getCartItemsByUserId(user?.user?._id)
      .then((res) => {
        setCartItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [postResp]);

  useEffect(() => {
    getDrugsById(id)
      .then((res) => {
        setDrug(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  useEffect(() => {
    if (drug) {
      setCategoryId(drug?.category._id);
    }
  }, [drug]);

  return (
    <div className="pt-24 md:pt-20 w-full min-h-[100vh]">
      {loading && <div className="p-10"> Loading...</div>}
      {error && <div> {error?.message} </div>}
      {drug && (
        <div className="product-container md:py-10 p-2 md:px-10 h-full w-full flex items-start gap-4">
          <div className="main-section w-[75%] flex flex-col gap-10 flex-1 h-full">
            {/* first section */}
            <div className="w-full h-full dark:bg-teal-900 bg-white rounded-2xl flex flex-col md:flex-row p-4 gap-4 shadow-lg">
              <div className="imagesection w-full md:w-[25%] flex flex-row md:flex-col items-center gap-4">
                <div className="main-image w-56 h-56 md:w-full md:h-[50vh]">
                  <img
                    className="w-full h-full object-cover"
                    src={drug.imageUrl}
                    alt=""
                  />
                </div>
                <div className="other-images md:flex flex gap-2 p-4">
                  <div className="container">
                    <img src={drug.imageUrl} alt="" />
                  </div>
                  <div className="container">
                    <img src={drug.imageUrl} alt="" />
                  </div>
                  <div className="container">
                    <img src={drug.imageUrl} alt="" />
                  </div>
                </div>
              </div>
              <div className="product-info w-[75%] flex flex-1 flex-col gap-3">
                <div className="top-badge flex gap-2">
                  <div className="bg-teal-950 text-white text-xs md:text-sm flex items-center p-2 rounded-lg">
                    Authorized seller
                  </div>
                  <div className="bg-orange-300 text-sm p-2  text-xs md:text-sm flex items-center rounded-lg text-teal-950">
                    Non-refundable
                  </div>
                </div>
                <div className="main-info flex flex-col gap-2 text-teal-950 dark:text-white">
                  <h2 className="drug-name text-2xl font-bold">
                    {drug.name.toUpperCase()}
                  </h2>
                  <div className="text-xs md:text-sm flex flex-col xl:flex-row md:justify-between items-start">
                    <p>
                      Manufacturer: <span>{drug.manufacturer}</span>
                    </p>
                    {/* remember to link this button to fetch products by manufacturer */}
                    <button className="italic underline ">
                      See More drugs from this manufacturer
                    </button>
                  </div>

                  <div className="price flex flex-wrap gap-4 items-center mt-4">
                    <div className="promo-price font-bold text-3xl md:text-6xl ">
                      <span className="">{drug?.price.currency && "£"}</span>
                      <span className=" ml-1">{drug.price.amount}</span>
                    </div>

                    <div className="true-price text-lg md:text-4xl line-through">
                      <span>{drug?.price.currency && "£"}</span>
                      <span>
                        {Math.round(
                          (drug.price.amount / (1 - 20 / 100) +
                            Number.EPSILON) *
                            100
                        ) / 100}
                      </span>
                    </div>
                    <div className="percentage-badge text-white bg-teal-700 rounded-lg p-2 text-xs md:text-sm">
                      -20%
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 text-[12px]">
                    <h2>in stock</h2>
                    <div className="rating flex items-center gap-4">
                      <div className="stars flex text-amber-500">
                        <IoMdStar size={30} />
                        <IoMdStar size={30} />
                        <IoMdStar size={30} />
                      </div>
                      <div className="reviews-count">
                        ({reviews.length} verified ratings)
                      </div>
                    </div>
                  </div>

                  <div className="my-4">
                    <QuantityButton
                      optionValue={optionValue}
                      setOptionValue={setOptionValue}
                    />
                  </div>

                  {cartItem && !cartItem.some((item) => item?.drugId._id === drug?._id) && (
                    <button
                    
                      onClick={handleAddToCart}
                      className="w-full lg:w-[50%] bg-orange-300 p-4 text-teal-900 rounded-2xl font-bold"
                    >
                      ADD TO CART
                    </button>
                  )}
                  {/* remember to link this button to fetch products by category */}
                  <button
                    onClick={() => handleByCategory(drug)}
                    className="w-full lg:w-[50%] text-sm mt-2 text-white bg-teal-950 p-4 rounded-xl"
                  >
                    View more <span>{drug?.category.name}</span> Drugs
                  </button>
                </div>
              </div>
            </div>
            {/* second section */}
            <div className="w-full h-full bg-white shadow-lg dark:bg-teal-900 rounded-2xl flex flex-col p-4 gap-4">
              <h3 className="text-2xl font-bold w-full border-b border-teal-700 dark:text-white">
                Product details
              </h3>
              <p className="text-sm md:text-medium">{drug.description}</p>
            </div>

            {/* third section */}
            <div className="w-full h-full bg-white shadow-lg dark:bg-teal-900 text-teal-900 dark:text-white rounded-2xl flex flex-col p-4 gap-4 ">
              <h3 className="text-2xl font-bold">Verified Customer Feedback</h3>
              <div className="flex flex-col md:flex-row gap-8 w-full items-start">
                <div className="rating-section flex flex-col items-center w-full md:w-[30%] h-72 border rounded-lg border-teal-800 p-4">
                  <p className="mb-8">VERIFIED RATING </p>
                  <div className="rating-box p-4 flex flex-col items-center gap-3 dark:bg-teal-950 bg-white shadow-lg rounded-2xl">
                    <p className="text-4xl font-bold">4/5</p>

                    <div className="star flex">
                      <IoMdStar size={20} />
                      <IoMdStar size={20} />
                      <IoMdStar size={20} />
                      <IoMdStar size={20} />
                      <IoMdStar size={20} />
                    </div>
                    <p>{reviews.length} verified ratings</p>
                  </div>
                </div>
                {/* reviews section */}
                <div className="md:w-[65%] w-full flex flex-col min-h-72 border rounded-lg border-teal-800 p-4">
                  <h3 className="mb-8">REVIEWS</h3>
                  <>
                    <Review
                      reviews={reviews}
                      reviewError={reviewError}
                      reviewLoading={reviewLoading}
                    />
                    <ReviewUpload
                      refresh={refresh}
                      sendReview={sendReview}
                      user={user}
                      id={id}
                    />
                  </>
                </div>
              </div>
            </div>
            {/* fourth section */}
            <OtherDrugsCarousel drugsByCategory={drugsByCategory} />
          </div>
          <DeliverySideSection />
        </div>
      )}
    </div>
  );
}
