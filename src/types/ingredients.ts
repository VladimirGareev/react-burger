import { GET_INGREDIENTS_DATA, GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS, SET_INGREDIENT_MODAL, RESET_INGREDIENT_MODAL} from "../services/constants";


export type TIngredient = {
    _id: string,
    name: string,
    type: string,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number,
    count?:number
  };

  export type TSelectedIngredient = TIngredient & {
    id: string
  }

  type TSetIngredientModalAction = {
    readonly type: typeof SET_INGREDIENT_MODAL;
    readonly payload: TIngredient;
  }

  type TResetIngredientModalAction = {
    readonly type: typeof RESET_INGREDIENT_MODAL;
  }

  export type TIngredientModalActions = 
  |TSetIngredientModalAction
  |TResetIngredientModalAction;

  export type TIngredientModalState = {
    isOpen: boolean;
    ingredient: TIngredient|{};
  }

  type TGetIngredientsDataAction = {
    readonly type: typeof GET_INGREDIENTS_DATA;
  }

  type TGetIngredientsFailedAction = {
    readonly type: typeof GET_INGREDIENTS_FAILED;
    readonly payload: string
  }

  type TGetIngredientsSuccessAction = {
    readonly type: typeof GET_INGREDIENTS_SUCCESS;
    readonly payload: Array<TIngredient>
  }

  export type TIngredientsActions = 
  |TGetIngredientsDataAction
  |TGetIngredientsFailedAction
  |TGetIngredientsSuccessAction;

  export type TIngredientsState = {
    ingredients: Array<TIngredient>;
    isLoading: boolean;
    error: string
  }