import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
} from "./cartItemsTypes";

const initialState = {
  cartItems: [],
};

const cartItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          item => item.itemId !== action.payload
        ),
      };

    case INCREMENT_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map((item, i) =>
          item.itemId === action.payload
            ? { ...item, count: item.count + 1 }
            : item
        ),
      };

    case DECREMENT_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map((item, i) =>
          item.itemId === action.payload
            ? { ...item, count: item.count - 1 }
            : item
        ),
      };

    default:
      return state;
  }
};

export default cartItemsReducer;
