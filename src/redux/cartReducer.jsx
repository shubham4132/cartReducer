const initialState = {
  cartItems: [],
  total: 0,
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "cart/added":

    default:
      return state;
  }
};
export default cartReducer;
