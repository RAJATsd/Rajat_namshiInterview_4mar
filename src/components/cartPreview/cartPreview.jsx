import "./cartPreview.css";
import React from "react";
import Cart from "../cart/cart";
import RedirectButton from "../redirect-button/redirect-button";

const CartPreview = () => {
  return (
    <div className="cart-preview-container">
      <RedirectButton route={"/cart"} text={"View full cart"} />
      <Cart />
    </div>
  );
};

export default CartPreview;
