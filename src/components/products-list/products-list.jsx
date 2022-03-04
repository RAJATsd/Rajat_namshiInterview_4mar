import "./products-list.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAllProducts } from "../../redux/actions/products";
import SingleProduct from "../singleProduct/single-product";

const ProductsList = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.products);
  useEffect(() => {
    if (allProducts.length === 0) {
      dispatch(fetchAllProducts());
    }
  }, []);
  return (
    <div className="product-list-container">
      <h3>All Items</h3>
      {allProducts.map((singleProduct) => (
        <SingleProduct key={singleProduct.id} productInfo={singleProduct} />
      ))}
    </div>
  );
};

export default ProductsList;
