import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
  CONSTRUCTOR_RESET,
} from "../constants";

import { newApi } from "../../utils/api";
import { AppDispatch, AppThunk } from "../../types/store";

import { getCookie } from "../../utils/cookie";



export const orderBurger:AppThunk = (orderData) => (dispatch:AppDispatch) => {
  dispatch({
    type: CREATE_ORDER_REQUEST,
  });
  return newApi
    .getOrder(orderData)
    .then((res) => {
      dispatch({
        type: CREATE_ORDER_SUCCESS,
        payload: res,
      });
      dispatch({
        type: CONSTRUCTOR_RESET,
      })
    })
    .catch((err) => {
      dispatch({
        type: CREATE_ORDER_FAILED,
        payload: err,
      });
    });
};
