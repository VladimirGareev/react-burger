import { CONSTRUCTOR_ADD, CONSTRUCTOR_REORDER } from "../constants";

import { TSelectedIngredient } from "../../types/ingredients";

import { TConstructorReorderAction, TAddIngredientAction } from "../../types/constructor";
export const addIngredient = (payload:TSelectedIngredient):TAddIngredientAction => {
  return {
    type: CONSTRUCTOR_ADD,
    payload,
  };
};

export const constructorReorder = (
  selectedIngredients:Array<TSelectedIngredient>,
  dragIndex:number,
  hoverIndex:number
):TConstructorReorderAction => {
  const dragIngredient = selectedIngredients[dragIndex];
  selectedIngredients.splice(dragIndex, 1);
  selectedIngredients.splice(hoverIndex, 0, dragIngredient);
  return {
    type: CONSTRUCTOR_REORDER,
    payload: [...selectedIngredients],
  };
};
