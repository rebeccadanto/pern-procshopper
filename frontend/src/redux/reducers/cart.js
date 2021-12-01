import { CART } from "../types";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART.ADD:
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case CART.REMOVE:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.id),
      };
    case CART.INCREMENT:
      return {
        ...state,
        cart: [
          ...state.cart.map((item) => {
            if (item.id === action.id) {
              item.quantity++;
            }
            return item;
          }),
        ],
      };
    case CART.DECREMENT:
      return {
        ...state,
        cart: [
          ...state.cart.map((item) => {
            if (item.id === action.id) {
              item.quantity--;
            }
            return item;
          }),
        ],
      };
    case CART.CLEAR:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
