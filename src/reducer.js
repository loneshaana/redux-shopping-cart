const Reducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const cartState = Object.assign(new Map(state), state);
      const total = cartState.get(action.id);
      if (total === undefined) cartState.set(action.id, 1);
      else cartState.set(action.id, total + 1);
      return cartState;
    case "DEC_COUNT":
      const newProducts = Object.assign(new Map(state), state);
      const product = newProducts.get(action.id);
      product.count--;
      newProducts.set(action.id, product);
      return newProducts;
    case "CHECKOUT":
      return { ...state, cart: new Map() };
    default:
      return state;
  }
};

const Helper = (state, action) => {
  if (action.id === undefined) return state;
  if (action.type === "ADD_TO_CART") {
    const newCart = Reducer(state.cart, action);
    return { ...state, cart: newCart };
  }
  if (action.type === "DEC_COUNT") {
    const newProducts = Reducer(state.Products, action);
    return { ...state, Products: newProducts };
  }
  return { ...Reducer(state, action) };
};
export default Helper;
