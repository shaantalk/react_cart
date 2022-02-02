import React from "react";
import { connect } from "react-redux";

import { CartEmpty } from "../../components/cartEmpty/CartEmpty";
import CartFull from "../../components/cartFull/CartFull";

function Cart({ cartItems }) {
  return (
    <main>
      {cartItems.length ? <CartFull /> : <CartEmpty />}
      {/* cartItems={cartItems} */}
    </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
