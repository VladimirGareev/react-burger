import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
  RESET_ORDER_MODAL,
  SET_ORDER_MODAL,
} from "../constants";

const orderInitialState = {
  order: null,
  isLoading: false,
  error: false,
  isOrderModalOpen: false,
};

const order = (state = orderInitialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_ORDER_SUCCESS:
      return { ...state, isLoading: false, order: action.payload };

    case CREATE_ORDER_FAILED:
      return { ...state, isLoading: false, error: action.payload };

    case RESET_ORDER_MODAL:
      return {
        ...state,
        isOrderModalOpen: false,
      };
    case SET_ORDER_MODAL: {
      return {
        ...state,
        isOrderModalOpen: true,
      };
    }

    default:
      return state;
  }
};

export default order;
