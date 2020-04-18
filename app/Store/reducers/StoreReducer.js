import {
  GET_PRODUCTS,
  GET_CATEGORIES,
  STORE_LOADING,
  ERROR_STORE,
} from "../../constants/ActionTypes";

const initialState = {
  products: [],
  categories: [],
  loading: false,
  error: false,
};

const StoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        products: action.data,
        loading: false,
        error: false,
      };
    }

    case GET_CATEGORIES: {
      return {
        ...state,
        categories: action.data,
        loading: false,
        error: false,
      };
    }

    case ERROR_STORE: {
      return {
        ...state,
        error: action.data,
        loading: false,
      };
    }

    case STORE_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
};

export default StoreReducer;
