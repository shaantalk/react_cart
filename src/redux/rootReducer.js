import { combineReducers } from "redux";

import itemsReducer from "./items/itemsReducer";
import cartItemsReducer from "./cartItems/cartItemsReducer";

const rootReducer = combineReducers({
  items: itemsReducer,
  cartItems: cartItemsReducer,
});

export default rootReducer;
