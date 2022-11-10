import {
  GET_INGREDIENTS_DATA,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from "../constants";

const ingredientsInitialState = {
  ingredients: [],
  isLoading: false,
  error: " ",
};

const ingredients = (state = ingredientsInitialState, action) => {
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