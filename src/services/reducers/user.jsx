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
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
} from "../constants";

const userInitialState = {
  email: "",
  name: "",
  registerUserError: null,
  registerUserRequest: false,
  loginUserRequest: false,
  loginUserError: null,
  logoutUserRequest: false,
  logoutUserError: null,
  getUserRequest: false,
  getUserFailed: null,
};

const user = (state = userInitialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        registerUserRequest: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        registerUserRequest: false,
        email: action.payload.email,
        name: action.payload.name,
        registerUserError: null,
      };

    case REGISTER_USER_FAILED:
      return {
        ...state,
        registerUserRequest: false,
        registerUserError: action.payload,
      };

    case LOGIN_USER:
      return {
        ...state,
        loginUserRequest: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loginUserRequest: false,
        email: action.payload.email,
        name: action.payload.name,
        loginUserError: null,
      };

    case LOGIN_USER_FAILED:
      return {
        ...state,
        loginUserRequest: false,
        loginUserError: action.payload,
      };

    case LOGOUT_USER:
      return {
        ...state,
        logoutUserRequest: true,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        logoutUserRequest: false,
        email: "",
        name: "",
        logoutUserError: null,
      };

    case LOGOUT_USER_FAILED:
      return {
        ...state,
        logoutUserRequest: false,
        logoutUserError: action.payload,
      };

    case GET_USER:
      return {
        ...state,
        getUserRequest: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        getUserRequest: false,
        email: action.payload.email,
        name: action.payload.name,
        getUserError: null,
      };

    case GET_USER_FAILED:
      return {
        ...state,
        getUserRequest: false,
        getUserError: action.payload,
      };

    default:
      return state;
  }
};

export default user;
