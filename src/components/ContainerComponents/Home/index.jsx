import "./style.scss";
import React from "react";
import ProductDetails from "../../DesignComponents/ProductDetails";
import PaymentForm from "../PaymentForm";

const Home = () => (
  <div className="payment__main">
    <ProductDetails />
    <PaymentForm />
  </div>
);

export default Home;
