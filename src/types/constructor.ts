import {
  CONSTRUCTOR_ADD,
  CONSTRUCTOR_DELETE,
  CONSTRUCTOR_REORDER,
  CONSTRUCTOR_RESET,
} from "../services/constants";

import { TIngredient, TSelectedIngredient } from "./ingredients";

export type TAddIngredientAction = {
  readonly type: typeof CONSTRUCTOR_ADD;
  readonly payload: TSelectedIngredient;
};

export type TConstructorReorderAction = {
  readonly type: typeof CONSTRUCTOR_REORDER;
  readonly payload: Array<TSelectedIngredient>;
};

export type TConstructorDeleteAction = {
  readonly type: typeof CONSTRUCTOR_DELETE;
  readonly payload: TSelectedIngredient;
};

export type TConstructorReset = {
  readonly type: typeof CONSTRUCTOR_RESET;
};

export type TConstructorActions =
  | TAddIngredientAction
  | TConstructorDeleteAction
  | TConstructorReorderAction
  | TConstructorReset;

  export type TConstructorState = {
    bun: TIngredient|null,
    ingredients: Array<TSelectedIngredient>
  }