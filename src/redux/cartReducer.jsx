const initialState = {
  cartItems: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "cart/added": {
      const existingCartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingCartItem) {
        const updatedCartItems = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...state, cartItems: updatedCartItems };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    }
    case "cart/Removed":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case "cart/updated":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case "cart/calculateTotal": {
      const totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      return { ...state, total: totalPrice };
    }

    default:
      return state;
  }
};
export default cartReducer;
