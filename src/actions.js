export const addToCart = id => ({
  type: "ADD_TO_CART",
  id
});

export const decCount = id => ({
  type: "DEC_COUNT",
  id
});

export const checkout = () => ({
  type: "CHECKOUT",
  id: Math.floor(Math.random(1) * 10) // random id for no purpose
});
