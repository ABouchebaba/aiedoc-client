import {
  SET_COMMAND,
  CANCEL_COMMAND,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ADD_QUANTITY,
  REMOVE_QUANTITY,
} from "../../constants/ActionTypes";
import { setCommand } from "../api";

import _ from "lodash";

export const addToCart = (product, cart) => (dispatch) => {
  // dispatch({ type: LOGIN_LOADING });
  if (cart.length === 0) {
    cart.push(product);
    console.log("add new product: ", product.product_id);
    return dispatch({
      type: ADD_PRODUCT,
      data: cart,
    });
  } else {
    let prod = _.find(cart, { product_id: product.product_id });
    if (_.isUndefined(prod)) {
      cart.push(product);
      console.log("add new product: ", product.name);
      return dispatch({
        type: ADD_PRODUCT,
        data: cart,
      });
    } else {
      return dispatch(addQuantity(product.product_id, cart));
    }
  }
};

export const addQuantity = (id, cart) => (dispatch) => {
  console.log("add quantity for: ", id);
  let newCart = cart.map((product) => {
    if (product.product_id === id) {
      product.qty = product.qty + 1;
    }
    return product;
  });
  return dispatch({
    type: ADD_PRODUCT,
    data: newCart,
  });
};

export const removeQuantity = (id, cart) => (dispatch) => {
  console.log("remove quantity for: ", id);
  let newCart = cart.map((product) => {
    if (product.product_id === id) {
      product.qty = product.qty - 1;
    }
    return product;
  });
  return dispatch({
    type: ADD_PRODUCT,
    data: newCart,
  });
};

export const removeProduct = (id, cart) => (dispatch) => {
  if (cart.length > 0) {
    console.log("remove product:", id);
    let newCart = cart.filter((product) => {
      if (product.product_id !== id) {
        return product;
      }
    });
    return dispatch({
      type: ADD_PRODUCT,
      data: newCart,
    });
  } else {
    console.log("there is no product", cart.length);
  }
};

export const addCommand = (data) => (dispatch) => {
  setCommand(data)
    .then((res) => {
      console.log(res)
      // dispatch({
      //   type: SET_COMMAND,
      //   data: [],
      // });
    })
    .catch((err) => {
      alert("Veuillez vérifier votre connexion internet");
      console.log(err.message);
    });
};
