import { TIngredientModalActions, TIngredientModalState } from "../../types/ingredients";
import { RESET_INGREDIENT_MODAL, SET_INGREDIENT_MODAL } from "../constants";

const ingredientInitialState:TIngredientModalState = {
  isOpen: false,
  ingredient: {},
};

const ingredient = (state = ingredientInitialState, action:TIngredientModalActions):TIngredientModalState => {
  switch (action.type) {
    case RESET_INGREDIENT_MODAL: {
      return {
        ...state,
        isOpen: false,
        ingredient: {},
      };
    }
    case SET_INGREDIENT_MODAL: {
      return {
        ...state,
        isOpen: true,
        ingredient: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default ingredient;
