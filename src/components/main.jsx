import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <ul className="flex flex-col items-center h-screen justify-center leading-10 text-2xl">
      <li>
        <Link to="1-email">Email Subscribe Card</Link>
      </li>
      <li>
        <Link to="2-pricing-cards">Pricing Cards</Link>
      </li>
      <li>
        <Link to="3-product-model">Product Model</Link>
      </li>
      <li>
        <Link to="4-image-gallery">Image Gallery</Link>
      </li>
      <li>
        <Link to="5-login-model">Login Model</Link>
      </li>
    </ul>
  );
};

export default Main;
