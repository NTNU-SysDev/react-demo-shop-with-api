export function setProducts(products) {
  return function (dispatch) {
    dispatch({
      type: "SET_PRODUCTS",
      products: products
    });
  };
}

export function setShoppingCart(shoppingCart) {
  return function (dispatch) {
    dispatch({
      type: "SET_SHOPPING_CART",
      shoppingCart: shoppingCart
    });
  };
}
