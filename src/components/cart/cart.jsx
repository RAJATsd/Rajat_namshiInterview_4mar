import "./cart.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SingleCartItem from "../singleCartItem/singleCartItem";
import { actionToClearCart } from "../../redux/actions/cart";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const calculateSumOfAllCartItems = () =>
    cartItems?.reduce((acc, curr) => curr.count * curr.price + acc, 0);

  return (
    <div className="cart-container">
      <div className="cart-top-section">
        <h3>My Cart</h3>{" "}
        <button
          type="button"
          onClick={() => dispatch(actionToClearCart())}
          className="clear-cart-button"
        >
          Clear Cart
        </button>
      </div>
      <div className="cart-items-container">
        {cartItems?.map((singleCartItem) => (
          <SingleCartItem
            key={singleCartItem.id}
            cartItemDetails={singleCartItem}
          />
        ))}
      </div>
      <div className="cart-bottom-section">
        <div className="total-text">Cart Total</div>
        <div className="total-price"> $ {calculateSumOfAllCartItems()}</div>
      </div>
    </div>
  );
};

export default Cart;
