import React from "react";
import { connect } from "react-redux";

import Item from "../item/Item";

import "./item_gallery_styles.css";

function ItemGallery({ items }) {
  return (
    <section>
      <div className='item-gallery'>
        {items.map(item => (
          <Item key={item.itemId} item={item} />
        ))}
      </div>
    </section>
  );
}

const mapStateToProps = state => {
  return {
    items: state.items.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemGallery);
