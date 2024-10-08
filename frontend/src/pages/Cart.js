import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import PayButton from "../components/PayButton";
import QuantityButtonCart from "../components/QuantityButtonCart";

const Cart = () => {
  const {
    cartItem,
    setCartItem,
    DeleteFromCart,
    getCartItemsByUserId,
    UpdateCart,
  } = useContext(CartContext);

  const { user } = useContext(AuthContext);
  const [delResp, setDelResp] = useState("");
  const [updateResp, setUpdateResp] = useState("");
  const navigate = useNavigate();

  const handleDelete = (cartId) => (e) => {
    e.preventDefault();
    DeleteFromCart(cartId)
      .then((res) => {
        setDelResp(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateCartItems = (payload) => {
    const { quantity, status, _id: cartId } = payload;
    UpdateCart({ quantity, status }, cartId)
      .then((res) => {
        setUpdateResp(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCartItemsByUserId(user?.user._id)
      .then((res) => {
        setCartItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [delResp, updateResp]);

  return (
    <div className="pt-20 md:pt-20 w-full min-h-[100vh] flex flex-col lg:flex-row">
      <div className="cart-container p-4 md:p-10 h-full w-full lg:w-[50%] flex flex-col">
        <div className="heading flex w-full text-sm md:text-xl border-b p-4">
          <h2>Shopping Cart</h2>
        </div>
        <div className="items-list w-full mt-10">
          {cartItem &&
            cartItem?.map((item, key) => (
              <div key={item?._id} className="flex flex-col border-b pb-5 mb-5">
                <div className="item w-full flex gap-8 mb-10">
                  <div className="image-container w-[40%] h-52 bg-gray-200">
                    <img className="w-full h-full object-cover" src="" alt="" />
                  </div>
                  <div className="item-detail flex flex-col w-full gap-4">
                    <p className="text-sm md:text-medium">
                      Order ID: DD83HJSBE99029002
                    </p>
                    <p className="md:text-3xl font-bold">
                      {item?.drugId?.name}
                    </p>
                    <p className="text-sm md:text-medium">
                      Drug Type: {item?.drugId?.category.name}
                    </p>
                    <p className="text-sm md:text-medium">
                      Manufacturer: {item?.drugId?.manufacturer}
                    </p>
                    <p className="text-sm md:text-medium">
                      Drug Dose: {item?.drugId?.dose}
                    </p>
                    <div className="price flex flex-col gap-4">
                      <p className="text-sm md:text-medium">
                        Unit Price: <span>£</span>
                        <span className="ml-1">
                          {Math.round(item?.drugId.price.amount * 100) / 100}
                        </span>
                      </p>
                      <p className="text-lg md:text-xl font-bold">
                        Total Price: <span>£</span>
                        <span className="ml-1">
                          {Math.round(
                            item?.drugId.price.amount * item?.quantity * 100
                          ) / 100}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <form className="flex w-full items-center gap-4">
                  <QuantityButtonCart
                    handleDelete={handleDelete}
                    id={item._id}
                    initial={item.quantity}
                    updateCartItems={(data) =>
                      updateCartItems({ ...item, quantity: data })
                    }
                  />
                  <div className="flex flex-col sm:flex-row flex-1 gap-4 min-w-[50%]">
                    <button
                      onClick={() => navigate(`/drugs/${item?.drugId._id}`)}
                      className="bg-orange-300 w-full text-teal-950 p-4 rounded-2xl text-sm md:text-medium"
                    >
                      View Product
                    </button>
                    <button
                      onClick={handleDelete(item._id)}
                      className="w-full ml-auto text-white bg-red-600 p-4 rounded-2xl text-sm md:text-medium"
                    >
                      Remove Product
                    </button>
                  </div>
                </form>
              </div>
            ))}
        </div>
      </div>

      {cartItem && (
        <div className="cart-container p-4 md:p-10 h-full w-full lg:w-[50%] flex flex-col">
          <div className="heading flex w-full text-sm md:text-xl border-b p-4">
            <h2>Order Summary</h2>
          </div>
          <div className="pt-10 flex flex-col gap-6">
            <div className="q-and-price flex items-center justify-between w-full">
              <p className="item-count font-bold">
                ITEMS <span> {cartItem.length}</span>
              </p>
              <p className="price font-bold">
                <span className="font-bold">£</span>
                <span className="ml-1">
                  {cartItem.reduce((accumulator, item) => {
                    return (accumulator +=
                      Math.round(
                        item?.drugId.price.amount * item?.quantity * 100
                      ) / 100);
                  }, 0)}
                </span>
              </p>
            </div>

            <form className="promo flex flex-col">
              <label className="font-bold">PROMO CODE</label>
              <div className="p-6 flex">
                <input
                  className="p-4 rounded bg-teal-900 w-full"
                  placeholder="#PROMO CODE"
                  type="text"
                />
                <button className="bg-orange-300 rounded w-[30%] text-teal-950 font-bold">
                  Apply
                </button>
              </div>
            </form>
            <div className="total flex justify-between">
              <p className="font-bold">TOTAL COST</p>
              <p className="price font-bold">
                <span className="font-bold">£</span>
                <span className="ml-1">
                  {cartItem.reduce((accumulator, item) => {
                    return (accumulator +=
                      Math.round(
                        item?.drugId.price.amount * item?.quantity * 100
                      ) / 100);
                  }, 0)}
                </span>
              </p>
            </div>
            <div className="w-full font-bold bg-orange-300 h-20 text-teal-950">
              <PayButton cartItem={cartItem} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
