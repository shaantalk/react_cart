import React from "react";
import { connect } from "react-redux";
import { addCartItem } from "../../redux";

import { ItemRating } from "../itemRating/ItemRating";
import "./item_styles.css";

function Item({ addCartItem, item }) {
  let { itemId, name, rating, price, url } = item;

  return (
    <div className='item-card'>
      <img className='item-image' src={url} alt='product_id' />
      <span className='item-name'>{name}</span>
      <ItemRating itemId={itemId} rating={rating} />
      <span className='item-price'>${price}</span>
      <button
        className='buy-btn'
        onClick={() => addCartItem({ ...item, count: 1 })}
      >
        ADD TO CART
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addCartItem: item => dispatch(addCartItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
