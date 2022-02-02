import React from "react";
import { useNavigate } from "react-router-dom";

import "./navigation_section_styles.css";

export const NavigationSection = () => {
  const navigate = useNavigate();

  return (
    <section className='navigation-section'>
      <div className='second-nav'>
        <a className='link'>Products</a>
        <a className='link'>Our Story</a>
        <a className='link'>Ingredients</a>
        <a className='brand'>PARTAKE</a>
        <a className='link'>Find Us</a>
        <a className='link'>Blog</a>
        <a className='link' onClick={() => navigate("cart")}>
          Cart
        </a>
      </div>
    </section>
  );
};
