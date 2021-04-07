const initialState = {
  products: [],
  shoppingCart: []
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.products
      };

    case "SET_SHOPPING_CART":
      return {
        ...state,
        shoppingCart: action.shoppingCart
      };

    default:
      return state;
  }
}

export default dataReducer;
