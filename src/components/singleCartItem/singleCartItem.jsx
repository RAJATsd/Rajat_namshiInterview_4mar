import "./singleCartItem.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  actionToAddAnItemToCart,
  actionToRemoveAnItemFromCart,
} from "../../redux/actions/cart";

const SingleCartItem = ({ cartItemDetails }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.products?.products);
  const matchedProduct = products?.find(
    (singleProduct) => singleProduct.id === cartItemDetails.id
  );
  return matchedProduct ? (
    <div className="cart-item-container">
      <div className="cart-item-info-and-count-changer">
        <div className="cart-item-name">{matchedProduct.title}</div>
        <div className="cart-item-count-changer">
          <button
            type="button"
            onClick={() =>
              dispatch(actionToRemoveAnItemFromCart(cartItemDetails))
            }
          >
            -
          </button>
          <span>{cartItemDetails.count}</span>
          <button
            type="button"
            onClick={() => dispatch(actionToAddAnItemToCart(cartItemDetails))}
          >
            +
          </button>
        </div>
      </div>
      <div className="cart-item-price-and-total-price">
        <div className="cart-item-price">$ {matchedProduct.price}</div>
        <div className="total-price-for-item">
          $ {matchedProduct.price * cartItemDetails.count}
        </div>
      </div>
    </div>
  ) : null;
};

export default SingleCartItem;
