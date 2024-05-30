import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { OrderContext } from "../../contexts/OrderContext";
import { GoArrowLeft } from "react-icons/go";

export const OrderInfo = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { getOrderByOrderId, order, error, loading } = useContext(OrderContext);

  useEffect(() => {
    if (orderId) {
      getOrderByOrderId(orderId);
    }
  }, [orderId]);
  return (
    <div className="w-full p-20">
      {loading && <div className="">Loading...</div>}
      {error && <div className=""> Error </div>}
      {order && (
        <div className="dark:text-white text-teal-900">
          <button
            onClick={() => navigate(-1)}
            className="p-4 dark:bg-teal-950 dark:text-white bg-white shadow-xl text-teal-900 flex gap-2 items-center"
          >
            <span>
              <GoArrowLeft size={25} />
            </span>
            All Orders
          </button>
          <div className="order-info flex flex-col gap-2 mt-20">
            <div className="order-number flex gap-4 text-2xl font-medium">
              <p>Order</p>
              <p>#{order?._id} </p>
            </div>
            <div className="order-date flex gap-2">
              <p>Order Date:</p>
              <p>{ new Date(order?.createdAt).toLocaleDateString()}</p>
            </div>
            <div className="order-total flex gap-2">
              <p>Total:</p>
              <p>
                <span>£</span>
                {order?.total}
              </p>
            </div>
          </div>

          <div className="flex ">
            {/* delivery information */}
            <div className="delivery-info flex flex-col gap-2 mt-20">
              <p className="title flex gap-4 text-2xl font-medium">
                Delivery Address
              </p>
              <div className="details flex flex-col">
                <p>{order?.shipping.name}</p>
                <p>{order?.shipping.address.line1}</p>
                <p>{order?.shipping.address.line2}</p>
                <p>{order?.shipping.address.city}</p>
                <p>{order?.shipping.address.postal_code}</p>
                <p>
                  {order?.shipping.address.country === "GB"
                    ? "United Kingdom"
                    : order?.shipping.address.country}
                </p>
              </div>
            </div>

            {/* billing information */}
            <div className="delivery-info flex flex-col gap-2 mt-20 ml-[20%]">
              <p className="title flex gap-4 text-2xl font-medium">
                Billing Address
              </p>
              <div className="details flex flex-col ">
                <p>{order?.shipping.name}</p>
                <p>{order?.shipping.address.line1}</p>
                <p>{order?.shipping.address.line2}</p>
                <p>{order?.shipping.address.city}</p>
                <p>{order?.shipping.address.postal_code}</p>
                <p>
                  {order?.shipping.address.country === "GB"
                    ? "United Kingdom"
                    : order?.shipping.address.country}
                </p>
              </div>
            </div>
          </div>

          {/* Order List */}
          <div className="delivery-info flex flex-col gap-2 mt-20 ">
            <p className="title flex gap-4 text-2xl font-medium">Order List </p>
            <div className="details flex flex-col gap-6 dark:text-teal-100 py-10">
              {order?.products?.map((item) => (
                <div className="order-item flex gap-2 dark:text-teal-100">
                  <div className="image-container w-60 max-w-[30%] h-60 bg-white">
                    <img src={item?.drugId.image} alt="" />
                  </div>
                  <div className="drug-details ml-[40px] ">
                    <p className="text-lg font-bold">{item?.drugId.name}</p>
                    <p>Quantity: {item?.quantity}</p>
                    <p>£{item?.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
