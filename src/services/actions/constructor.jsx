import { CONSTRUCTOR_ADD, CONSTRUCTOR_REORDER } from "../constants";

export const addIngredient = (payload) => {
  return {
    type: CONSTRUCTOR_ADD,
    payload,
  };
};

export const constructorReorder = (
  selectedIngredients,
  dragIndex,
  hoverIndex
) => {
  const dragIngredient = selectedIngredients[dragIndex];
  selectedIngredients.splice(dragIndex, 1);
  selectedIngredients.splice(hoverIndex, 0, dragIngredient);
  return {
    type: CONSTRUCTOR_REORDER,
    payload: [...selectedIngredients],
  };
};
