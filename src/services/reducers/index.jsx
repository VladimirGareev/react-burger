import { combineReducers } from "redux";
import constructorBurger from "./constructor";
import ingredients from "./ingredients";
import ingredient from "./ingredient";
import order from "./order";

export const rootReducer = combineReducers({
  ingredients,
  constructorBurger,
  ingredient,
  order,
});
