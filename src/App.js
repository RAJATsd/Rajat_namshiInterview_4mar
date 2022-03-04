import "./App.css";
import React from "react";
import NavigationSection from "./components/navigationSection/navigationSection";
import ProductsList from "./components/products-list/products-list";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./components/cartPage/cartPage";
import CartPreview from "./components/cartPreview/cartPreview";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="page-container">
          <NavigationSection />
          <Routes>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/" element={<ProductsList />} />
          </Routes>
          <CartPreview />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
