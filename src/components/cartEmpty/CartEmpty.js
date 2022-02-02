import React from "react";
import { useNavigate } from "react-router-dom";

import "./cart_empty_styles.css";

export const CartEmpty = () => {
  const navigate = useNavigate();

  return (
    <div className='cart_empty_container'>
      <span className='cart_empty_text'>Your cart is empty</span>
      <button className='navigate_btn' onClick={() => navigate("/")}>
        Add something to cart...
      </button>
    </div>
  );
};
