import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

const PayButton = ({ cartItem }) => {
  const { user } = useContext(AuthContext);

  const handleCheckout = () => {
    console.log(cartItem);
    axios.post("http://localhost:3000/stripe/create-checkout-session", {
      cartItem,
      userId: user.user._id,
    }).then((res)=>{
        if(res.data.url){
            window.location.href = res.data.url;
        }
    }).catch((err) => {
        console.log(err.message);
    })
  };
  return (
    <>
      <button className="w-full h-full" onClick={() => handleCheckout()}>Check Out</button>
    </>
  );
};

export default PayButton;
