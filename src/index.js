import React from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";
import "./styles.css";
import ProductDisplay from "./ProductDisplay";
import configureStore from "./configureStore";
import products from "./products";
import Cart from "./cart";
const MyStore = configureStore(products());

function App({ store }) {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Shopping Cart</h1>
        <hr />
        <ProductDisplay />
        <hr />

        <Cart />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
const ConnectedApp = connect()(App);
ReactDOM.render(<ConnectedApp store={MyStore} />, rootElement);
