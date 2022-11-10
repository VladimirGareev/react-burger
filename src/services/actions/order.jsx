import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
} from "../constants";

import { Api } from "../../utils/api";

const orderApi = new Api({
  baseUrl: "https://norma.nomoreparties.space/api/orders",
});

export const orderBurger = (orderData) => (dispatch) => {
  dispatch({
    type: CREATE_ORDER_REQUEST,
  });
  return orderApi
    .getOrder(orderData)
    .then((res) => {
      dispatch({
        type: CREATE_ORDER_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: CREATE_ORDER_FAILED,
        payload: err,
      });
    });
};
