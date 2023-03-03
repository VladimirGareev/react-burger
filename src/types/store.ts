import store from "../services";
import { TConstructorActions } from "./constructor";
import { TIngredientModalActions, TIngredientsActions } from "./ingredients";
import { TOrderActions } from "./order";
import { TUserActions } from "./user";
import { TWsActions } from "./wsTypes";
import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "@reduxjs/toolkit";
import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook,
  } from "react-redux";
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<TReturn=void>=ActionCreator<ThunkAction<TReturn,Action,RootState,TAppActions>>

export type AppDispatch = typeof store.dispatch

type TAppActions = 
|TOrderActions
|TUserActions
|TConstructorActions
|TIngredientsActions
|TIngredientModalActions
|TWsActions

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useDispatch: () => AppDispatch | AppThunk = dispatchHook;