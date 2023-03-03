import { TIngredientsActions, TIngredientsState } from "../../types/ingredients";
import {
  GET_INGREDIENTS_DATA,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from "../constants";



const ingredientsInitialState:TIngredientsState = {
  ingredients: [],
  isLoading: false,
  error: " ",
};

const ingredients = (state = ingredientsInitialState, action:TIngredientsActions):TIngredientsState => {
  switch (action.type) {
    case GET_INGREDIENTS_DATA: 
      return {
        ...state,
        isLoading: true,
      };
    case GET_INGREDIENTS_SUCCESS: 
      return { ...state, isLoading: false, ingredients: action.payload };
    
    case GET_INGREDIENTS_FAILED: 
      return { ...state, isLoading: false, error: action.payload };
    
    default: 
        return state;
      
  }
  
};

export default ingredients