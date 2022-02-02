import React from "react";
import { connect } from "react-redux";
import {
  removeCartItem,
  incrementCartItem,
  decrementCartItem,
} from "../../redux";

import "./cart_item_styles.css";

function CartItem({
  cartItem,
  removeCartItem,
  incrementCartItem,
  decrementCartItem,
}) {
  let { itemId, name, price, url, count } = cartItem;

  let total = (price * count).toFixed(2);

  return (
    <div className='item'>
      <div className='buttons'>
        <button
          className='btn'
          type='button'
          name='button'
          onClick={() => removeCartItem(itemId)}
        >
          <i className={`fa fa-trash`} aria-hidden='true'></i>
        </button>
      </div>

      <div className='cart-item-image'>
        <img src={url} alt='item img' width={"100px"} height={"100px"} />
      </div>

      <div className='cart-item-name'>
        <span>{name}</span>
      </div>

      <div className='cart-item-price'>${price}</div>

      <div className='quantity'>
        <button
          className='btn'
          type='button'
          name='button'
          onClick={() => incrementCartItem(itemId)}
        >
          <i className={`fa fa-plus`} aria-hidden='true'></i>
        </button>
        <span className='cart-item-count'>{count}</span>
        <button
          className='btn'
          type='button'
          name='button'
          disabled={count === 1}
          onClick={() => decrementCartItem(itemId)}
        >
          <i className={`fa fa-minus`} aria-hidden='true'></i>
        </button>
      </div>

      <div className='total-price'>${total}</div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cartItems: state.cartItems.cartItems,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeCartItem: itemId => dispatch(removeCartItem(itemId)),
    incrementCartItem: itemId => dispatch(incrementCartItem(itemId)),
    decrementCartItem: itemId => dispatch(decrementCartItem(itemId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
