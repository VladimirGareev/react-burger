import { CREATE_ORDER_FAILED, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, RESET_ORDER_MODAL, SET_ORDER_MODAL  } from "../services/constants";
import { TIngredient } from "./ingredients";
import { TWSOrder } from "./wsTypes";

export type TFeedOrder = {
    order:TWSOrder;
    key: string;

}

type TOwner = {
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
}

export type TOrder = {
    ingredients: Array<TIngredient>;
    _id: string;
    status: string;
    name: string;
    number: number;
    price: number;
    createdAt: string;
    updatedAt: string;
    owner: TOwner;
}

export type TOrderFromServer = {
    success?: boolean;
    name?: string;
    order?: TOrder;
}

type TCreateOrderRequestAction = {
    readonly type: typeof CREATE_ORDER_REQUEST;
}

type TCreateOrderSuccessAction = {
    readonly type: typeof CREATE_ORDER_SUCCESS;
    readonly payload: TOrderFromServer;
}

type TCreateOrderFailedAction = {
    readonly type: typeof CREATE_ORDER_FAILED;
    readonly payload: {};
}

type TSetOrderModalAction = {
    readonly type: typeof SET_ORDER_MODAL;
}

type TResetOrderModalAction = {
    readonly type: typeof RESET_ORDER_MODAL;
}

export type TOrderActions = 
|TCreateOrderRequestAction
|TCreateOrderFailedAction
|TCreateOrderSuccessAction
|TSetOrderModalAction
|TResetOrderModalAction

export type TOrderState = {
    order: TOrderFromServer;
    isLoading: boolean;
    error: boolean|{}
    isOrderModalOpen: boolean,
}