import {
  SET_COMMAND,
  CANCEL_COMMAND,
  ADD_PRODUCT,
  CART_LOADING,
  REMOVE_PRODUCT,
  ERROR_CART,
  REMOVE_QUANTITY,
} from "../../constants/ActionTypes";

const initialState = {
  cart: [],
  loading: false,
  error: false,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        cart: [...action.data],
        loading: false,
        error: false,
      };
    }
    case REMOVE_PRODUCT: {
        return {
          ...state,
          cart: action.data,
          loading: false,
          error: false,
        };
      }
    case REMOVE_QUANTITY: {
        return {
          ...state,
          cart: action.data,
          loading: false,
          error: false,
        };
      }
    case ERROR_CART: {
      return {
        ...state,
        error: action.data,
        loading: false,
      };
    }

    case CART_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
