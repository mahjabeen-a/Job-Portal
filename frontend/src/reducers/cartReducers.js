import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_APPLICATION_DETAILS } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.job === item.job);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.job === existItem.job ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
      case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.job !== action.payload),
      };
      case CART_SAVE_APPLICATION_DETAILS:
      return { ...state, applicationdetails: action.payload };
    default:
      return state;
  }
};