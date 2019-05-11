// map productId and product
const Myproducts = [
  {
    name: "iPad 4 Mini",
    id: 1,
    properties: {
      price: "500",
      brand: "Apple",
      count: 1
    }
  },
  {
    name: "H&M T-Shirt White",
    id: 2,
    properties: {
      price: "75",
      brand: "H&M",
      count: 10
    }
  }
];
const initialize = () => {
  const Products = new Map();
  const productIds = [];
  const cart = new Map();
  Myproducts.map(product => {
    Products.set(product.id, {
      ...product.properties,
      name: product.name,
      id: product.id
    });
    productIds.push(product.id);
  });
  return { Products, productIds, cart };
};

export default initialize;
