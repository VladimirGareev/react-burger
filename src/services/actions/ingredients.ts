import {
  GET_INGREDIENTS_DATA,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from "../constants";
import { newApi } from "../../utils/api";
import { AppDispatch, AppThunk } from "../../types/store";

export const getIngredients:AppThunk = () => (dispatch:AppDispatch) => {
  dispatch({
    type: GET_INGREDIENTS_DATA,
  });
  return newApi
    .getInfo()
    .then((res) => {
      dispatch({
        type: GET_INGREDIENTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_INGREDIENTS_FAILED,
        payload: err,
      });
    });
};
