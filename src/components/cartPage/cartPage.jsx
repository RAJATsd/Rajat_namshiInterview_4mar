import "./cartPage.css";
import React from "react";
import Cart from "../cart/cart";
import RedirectButton from "../redirect-button/redirect-button";

const CartPage = () => {
  return (
    <div className="cart-page-container">
      <RedirectButton route={"/"} text={"Go To Products Page"} />
      <Cart />
    </div>
  );
};

export default CartPage;
