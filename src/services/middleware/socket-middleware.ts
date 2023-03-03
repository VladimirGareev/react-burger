import { Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { TWsActions, TWsMiddlewareActions } from "../../types/wsTypes";
import { AppDispatch, RootState } from "../../types/store";

export const socketMiddleware = (wsUrl:string, wsActions:TWsMiddlewareActions): Middleware => {
  return (store:MiddlewareAPI<AppDispatch, RootState>) => {
    let socket:WebSocket|null = null;

    return (next) => (action:TWsActions) => {
      const { dispatch } = store;
      const { type } = action;
      const { wsInit, onOpen, onClose, onError, onMessage } = wsActions;

      if (type === wsInit) {
        socket = type === "WS_USER_CONNECT" && action.payload
          ? new WebSocket(`${wsUrl}${action.payload}`)
          : new WebSocket(wsUrl);
      }
      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          dispatch({ type: onMessage, payload: restParsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };
      }

      next(action);
    };
  };
};
