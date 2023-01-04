import {
  WS_USER_CONNECT,
  WS_ALL_CONNECT,
  WS_USER_ERROR,
  WS_ALL_ERROR,
  WS_USER_CLOSED,
  WS_ALL_CLOSED,
} from "../constants";

export const connectUserWs = (token) => {
  return {
    type: WS_USER_CONNECT,
    payload: `?token=${token}`,
  };
};

export const connectAllWs = () => {
  return {
    type: WS_ALL_CONNECT,
  };
};

export const closeUserWs = () => {
  return {
    type: WS_USER_CLOSED,
  };
};

export const closeAllWs = () => {
  return {
    type: WS_ALL_CLOSED,
  };
};

export const errorUserWs = () => {
  return {
    type: WS_USER_ERROR,
  };
};

export const errorAllWs = () => {
  return {
    type: WS_ALL_ERROR,
  };
};
