import { getCookie, setCookie, deleteCookie } from "../../utils/cookie";

import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_FAILED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILED,
  CHECK_USER_AUTH,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
} from "../constants";


import {
  registerUser,
  loginUser,
  logoutUser,
  getUserApi,
  updateUserData,
} from "../../utils/user-api";

export const getUserRegistered = (userData) => (dispatch) => {
  dispatch({
    type: REGISTER_USER,
  });

  return registerUser(userData)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка ${res.status}`);
      }
    })
    .then((res) => {
      localStorage.setItem("refreshToken", res.refreshToken);
      setCookie("accessToken", res.accessToken);
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: res.user,
      });
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_USER_FAILED,
        payload: err,
      });
    });
};

export const getUserLogged = (userData) => (dispatch) => {
  dispatch({
    type: LOGIN_USER,
  });

  return loginUser(userData)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка ${res.status}`);
      }
    })
    .then((res) => {
      localStorage.setItem("refreshToken", res.refreshToken);
      setCookie("accessToken", res.accessToken);
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: res.user,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_USER_FAILED,
        payload: err,
      });
    });
};

export const getUserLoggedOut = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });

  return logoutUser()
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка ${res.status}`);
      }
    })
    .then(() => {
      localStorage.removeItem("refreshToken");
      deleteCookie("accessToken");
      dispatch({
        type: LOGOUT_USER_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGOUT_USER_FAILED,
        payload: err,
      });
    });
};

export const checkUserAuth = () => (dispatch) => {
  if (getCookie("accessToken")) {
    dispatch(getUser()).finally(() => {
      dispatch({ type: CHECK_USER_AUTH });
    });
  } else {
    dispatch({ type: CHECK_USER_AUTH });
  }
};

export const getUser = () => (dispatch) => {
  dispatch({
    type: GET_USER,
  });

  return getUserApi()
    .then((res) => {
      if (res.success) {
        dispatch({
          type: GET_USER_SUCCESS,
          payload: res.user,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: GET_USER_FAILED,
      });
    });
};

export const updateUser = (data) => (dispatch) => {
  dispatch({
    type: GET_USER,
  });

  return updateUserData(data)
    .then((res) => {
      if (res.success) {
        dispatch({
          type: GET_USER_SUCCESS,
          payload: res.user,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: GET_USER_FAILED,
      });
    });
};
