import { currentUrl } from "./data";

class Api {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  // _checkResponsePassword (res) {
  //   if (res.success) {
  //     history.replace({pathname:'/reset-password'})
  //   }
  //   return Promise.reject(`Ошибка ${res.status}`)
  // }

  getInfo() {
    return fetch(`${this.baseUrl}ingredients`).then(this._checkResponse);
  }

  getOrder(data) {
    return fetch(`${this.baseUrl}orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredients: data }),
    }).then(this._checkResponse);
  }

  resetPassword(email) {
    return fetch(`${this.baseUrl}password-reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    }).then(this._checkResponse);
  }

  submitNewPassword(data) {
    return fetch(`${this.baseUrl}password-reset/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }
}

export const newApi = new Api({ baseUrl: currentUrl });
