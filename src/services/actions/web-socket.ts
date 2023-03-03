import { TWsAllClosedAction, TWsAllConnectAction, TWsUserClosedAction, TWsUserConnectAction, TWsUserErrorAction } from "../../types/wsTypes";
import {
  WS_USER_CONNECT,
  WS_ALL_CONNECT,
  WS_USER_ERROR,
  WS_ALL_ERROR,
  WS_USER_CLOSED,
  WS_ALL_CLOSED,
} from "../constants";

export const connectUserWs = (token:string):TWsUserConnectAction => {
  return {
    type: WS_USER_CONNECT,
    payload: `?token=${token}`,
  };
};

export const connectAllWs = ():TWsAllConnectAction => {
  return {
    type: WS_ALL_CONNECT,
  };
};

export const closeUserWs = ():TWsUserClosedAction => {
  return {
    type: WS_USER_CLOSED,
  };
};

export const closeAllWs = ():TWsAllClosedAction => {
  return {
    type: WS_ALL_CLOSED,
  };
};

