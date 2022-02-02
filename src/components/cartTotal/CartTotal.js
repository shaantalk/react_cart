import React from "react";
import { connect } from "react-redux";

import "./cart_total_styles.css";

function CartTotal({ cartItems }) {
  let subtotal = cartItems.reduce((accumulator, cartItem) => {
    return accumulator + cartItem.price * cartItem.count;
  }, 0);

  subtotal = subtotal.toFixed(2);

  return (
    <div className='subtotal_container'>
      <span className='subtotal'>Subtotal &emsp; {subtotal}</span>
      <p className='disclaimer'>Taxes and shipping calculated at checkout</p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cartItems: state.cartItems.cartItems,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTotal);
