import React from "react";
import { connect } from "react-redux";
import { addToCart, decCount } from "./actions";

class ProductDisplay extends React.Component {
  _addToCart = id => {
    const { addToCart, decCount } = this.props;
    addToCart(id);
    decCount(id);
  };

  render() {
    const { products, productIds } = this.props;
    return (
      <div>
        {productIds.map(p => {
          return (
            <div key={p}>
              Name:{products.get(p).name},Price:{products.get(p).price}$
              {products.get(p).count !== 0 ? (
                <button onClick={() => this._addToCart(p)}>Add To Cart</button>
              ) : (
                <button>Sold out</button>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  products: state.Products,
  productIds: state.productIds
});

const mapDispatchToProps = dispatch => ({
  addToCart: id => dispatch(addToCart(id)),
  decCount: id => dispatch(decCount(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDisplay);
