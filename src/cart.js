import React from "react";
import { connect } from "react-redux";
import { checkout } from "./actions";

class Cart extends React.Component {
  render() {
    const { cart, products, checkout, total } = this.props;
    if ([...cart].length === 0) {
      return <div style={{ marginTop: 50 }}>Please add some items to cart</div>;
    }
    return (
      <div style={{ marginTop: 50 }}>
        <h3>Your Cart</h3>
        <br />
        <h4>Total:${total}</h4>
        <div>
          {[...cart].map(([k, v]) => (
            <div>
              {products.get(k).name} * {v}
            </div>
          ))}
          <div>
            <button onClick={() => checkout()}>Checkout</button>
          </div>
        </div>
      </div>
    );
  }
}
const reducer = (acc, k, v, products) => {
  const price = products.get(k).price;
  return acc + price * v;
};

const getTotal = (cart, products) => {
  return [...cart].reduce((a, [k, v]) => reducer(a, k, v, products), 0);
};

const mapStateToProps = state => ({
  cart: state.cart,
  products: state.Products,
  total: getTotal(state.cart, state.Products)
});
const mapDispatchToProps = dispatch => ({
  checkout: () => dispatch(checkout())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
