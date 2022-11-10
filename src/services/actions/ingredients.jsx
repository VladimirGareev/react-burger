import {
  GET_INGREDIENTS_DATA,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from "../constants";
import { currentUrl } from "../../utils/data";
import { Api } from "../../utils/api";

const newApi = new Api({ baseUrl: currentUrl });

export const getIngredients = () => (dispatch) => {
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
