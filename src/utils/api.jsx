export class Api {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getInfo() {
    return fetch(`${this.baseUrl}`).then(this._checkResponse);
  }
}
