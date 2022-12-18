import { combineReducers } from "redux";
import constructorBurger from "./constructor";
import ingredients from "./ingredients";
import ingredient from "./ingredient";
import order from "./order";
import user from "./user";

export const rootReducer = combineReducers({
  ingredients,
  constructorBurger,
  ingredient,
  order,
  user, 
});
