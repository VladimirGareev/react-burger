import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from "./reducers";
import { socketMiddleware } from "./middleware/socket-middleware";
import {
  WS_USER_CONNECT,
  WS_ALL_CONNECT,
  WS_USER_SUCCESS,
  WS_ALL_SUCCESS,
  WS_USER_ORDERS,
  WS_ALL_ORDERS,
  WS_USER_ERROR,
  WS_ALL_ERROR,
  WS_USER_CLOSED,
  WS_ALL_CLOSED,
} from "./constants";
import { TWsMiddlewareActions } from "../types/wsTypes";

const URL = "wss://norma.nomoreparties.space/orders";

const wsUserActions:TWsMiddlewareActions = {
  wsInit: WS_USER_CONNECT,
  onOpen: WS_USER_SUCCESS,
  onClose: WS_USER_CLOSED,
  onError: WS_USER_ERROR,
  onMessage: WS_USER_ORDERS,
};

const wsAllActions:TWsMiddlewareActions = {
  wsInit: WS_ALL_CONNECT,
  onOpen: WS_ALL_SUCCESS,
  onClose: WS_ALL_CLOSED,
  onError: WS_ALL_ERROR,
  onMessage: WS_ALL_ORDERS,
};

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      socketMiddleware(URL, wsUserActions),
      socketMiddleware(`${URL}/all`, wsAllActions)
    )
  )
);

export default store;
