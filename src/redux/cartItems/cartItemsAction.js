import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
} from "./cartItemsTypes";

export const addCartItem = item => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const removeCartItem = itemId => {
  return {
    type: REMOVE_ITEM,
    payload: itemId,
  };
};

export const incrementCartItem = itemId => {
  return {
    type: INCREMENT_ITEM,
    payload: itemId,
  };
};

export const decrementCartItem = itemId => {
  return {
    type: DECREMENT_ITEM,
    payload: itemId,
  };
};
