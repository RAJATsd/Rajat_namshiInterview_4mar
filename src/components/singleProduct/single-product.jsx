import "./single-product.css";
import React from "react";
import { actionToAddAnItemToCart } from "../../redux/actions/cart";
import { useDispatch } from "react-redux";

const SingleProduct = ({ productInfo }) => {
  const dispatch = useDispatch();
  return (
    <div className="single-product-container">
      <div className="product-details-container">
        <div className="product-image">
          <img
            src={productInfo.image}
            alt={"product-pic"}
            className="single-product"
          />
        </div>
        <div className="product-info">
          <div className="product-name"> {productInfo.title} </div>
          <div className="product-price"> $ {productInfo.price}</div>
          <div className="product-description">{productInfo.description}</div>
        </div>
      </div>
      <div className="add-to-cart-button">
        <button
          type="button"
          onClick={() => dispatch(actionToAddAnItemToCart(productInfo))}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
