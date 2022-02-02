import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

import { TopNav } from "./components/topNav/TopNav";
import { Products } from "./pages/products/Products";
import Cart from "./pages/cart/Cart";
import { Error404 } from "./pages/errors/Error404";

import "./mayer_reset.css";
import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <TopNav />
        <Routes>
          <Route path='/' element={<Products />} />

          <Route path='cart' element={<Cart />} />
          {/* No Match Route */}
          <Route path='*' element={<Error404 />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
