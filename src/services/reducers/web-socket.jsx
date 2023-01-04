import {
  WS_USER_SUCCESS,
  WS_ALL_SUCCESS,
  WS_USER_ORDERS,
  WS_ALL_ORDERS,
  WS_USER_ERROR,
  WS_ALL_ERROR,
  WS_USER_CLOSED,
  WS_ALL_CLOSED,
} from "../constants";

const OrdersInitialState = {
  allOrdersConnection: false,
  userOrdersConnection: false,
  public: null,
  personal: null,
  allOrdersError: false,
  userOrdersError: false,
};

export const orders = (state = OrdersInitialState, action) => {
  switch (action.type) {
    case WS_USER_SUCCESS:
      return {
        ...state,
        userOrdersConnection: true,
        userOrdersError: false,
      };
    case WS_ALL_SUCCESS:
      return {
        ...state,
        allOrdersConnection: true,
        allOrdersError: null,
      };
    case WS_USER_ERROR:
      return {
        ...state,
        userOrdersConnection: false,
        userOrdersError: action.payload,
        personal: null,
      };
    case WS_ALL_ERROR:
      return {
        ...state,
        allOrdersConnection: false,
        allOrdersError: action.payload,
        public: null,
      };
    case WS_USER_ORDERS:
      return {
        ...state,
        personal: action.payload,
      };
    case WS_ALL_ORDERS:
      return {
        ...state,
        public: action.payload,
      };
    case WS_USER_CLOSED:
      return {
        ...state,
        userOrdersConnection: false,
        userOrdersError: false,
        personal: null,
      };
    case WS_ALL_CLOSED:
      return {
        ...state,
        allOrdersConnection: false,
        allOrdersError: false,
        public: null,
      };

    default:
      return state;
  }
};
