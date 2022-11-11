import {
  CONSTRUCTOR_ADD,
  CONSTRUCTOR_DELETE,
  CONSTRUCTOR_REORDER,
  CONSTRUCTOR_RESET
} from "../constants";

const burgerInitialState = {
  bun: null,
  ingredients: [],
};

const constructorBurger = (state = burgerInitialState, action) => {
  switch (action.type) {
    case CONSTRUCTOR_ADD: {
      if (action.payload.type === "bun") {
        return {
          ...state,
          bun: action.payload,
        };
      } else {
        return {
          ...state,
          ingredients: [
            { ...action.payload, id: Math.random().toString(36).slice(2) },
            ...state.ingredients,
          ],
        };
      }
    }
    case CONSTRUCTOR_DELETE: {
      return {
        ...state,
        ingredients: [
          ...state.ingredients.filter((item) => item.id !== action.payload.id),
        ],
      };
    }
    case CONSTRUCTOR_REORDER:
      return {
        ...state,
        ingredients: action.payload,
      };
      case CONSTRUCTOR_RESET:
        return {
          ...state,
          ingredients: [],
          bun: null
        };
    default: {
      return state;
    }
  }
};

export default constructorBurger;
