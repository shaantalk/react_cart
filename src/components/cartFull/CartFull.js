import React from "react";
import { connect } from "react-redux";

import CartItem from "../cartItem/CartItem";
import CartTotal from "../cartTotal/CartTotal";

import "./cart_full_styles.css";

function CartFull({ cartItems }) {
  return (
    <>
      <div className='shopping-cart'>
        {cartItems.map(cartItem => (
          <CartItem key={`cart-${cartItem.itemId}`} cartItem={cartItem} />
        ))}
      </div>

      <CartTotal />
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartFull);
