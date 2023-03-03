import { currentUrl } from "./data";
import { getCookie } from "./cookie";
import { TIngredient } from "../types/ingredients";
import { TOrder } from "../types/order";

export type TUrl = {
  baseUrl:string;
}

type TPasswordReset = {
  token:string;
  password: string
}

type TOrderResponse = {
 order: TOrder;
 name:string;
}

export type TResponse<T> ={
  success:boolean
} & T;

type TIngredientsSuccess = {
  data:Array<TIngredient> 
}

export type TMessage = 
{message:string}

class Api {
  private baseUrl: string;
  constructor(baseUrl:string) {
    this.baseUrl = baseUrl;
  }

  _checkResponse<T>(res: Response) {
    if (res.ok) {
      return res.json().then((data:TResponse<T>)=> data);
    }
    return res.json().then((data:TResponse<TMessage>)=> Promise.reject(`Ошибка ${data.message}`));
  }

  getInfo() {
    return fetch(`${this.baseUrl}ingredients`).then(this._checkResponse<TIngredientsSuccess>);
  }

  getOrder(data:Array<string>) {
    return fetch(`${this.baseUrl}orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: getCookie("accessToken")
      },
      body: JSON.stringify({ ingredients: data }),
    }).then(this._checkResponse<TOrderResponse>);
  }

  resetPassword(email:string) {
    return fetch(`${this.baseUrl}password-reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    }).then(this._checkResponse<TMessage>);
  }

  submitNewPassword(data:TPasswordReset) {
    return fetch(`${this.baseUrl}password-reset/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(this._checkResponse<TMessage>);
  }
}

export const newApi = new Api(currentUrl);
