import { getCookie, setCookie } from "./cookie";
import { currentUrl } from "./data";
import { TResponse, TMessage} from "./api";
import { string } from "prop-types";

 type TUserRegisterForm = {
  email: string;
  name: string;
  password: string;
}

type TUserLoginForm = {
  email: string;
  password: string;
}

type TOptions= {
  method: string;
  headers:any
    body?:string;
  }
type TUserResponse = {
  user: {name:string;
  email:string;}
}
const checkResponse = <T> (res: Response) => {

  if (res.ok) {
    return res.json().then((data:TResponse<T>)=> data);
  }
  
  return res.json().then((data:TResponse<TMessage>)=> Promise.reject(data));;
};

export const registerUser = (user:TUserRegisterForm) => {
  return fetch(`${currentUrl}auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
};

export const loginUser = (user:TUserLoginForm) => {
  return fetch(`${currentUrl}auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user),
  });
};

export const logoutUser = () => {
  return fetch(`${currentUrl}auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
  });
};

export const getUserApi = () => {
  return fetchWithRefresh <TUserResponse>(`${currentUrl}auth/user`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      authorization: getCookie("accessToken"),
    },
  });
};

export const updateUserData = (newData:TUserLoginForm) => {

  return fetchWithRefresh<TUserResponse>(`${currentUrl}auth/user`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      authorization: getCookie("accessToken"),
    },
    body: JSON.stringify(newData),
  });
};

const fetchWithRefresh = async <T> (url:string, options:TOptions) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse <T> (res);
  } catch (error:any) {
    if (error.message === "jwt expired") {
      const refreshData = await refreshToken();
      if (!refreshData.success) {
        Promise.reject(refreshData);
      }

      localStorage.setItem("refreshToken", refreshData.refreshToken);
      setCookie("accessToken", refreshData.accessToken);

      options.headers.authorization = refreshData.accessToken;

      const res = await fetch(url, options);
      return await checkResponse <T> (res);
    } else {
      return Promise.reject(error);
    }
  }
};

export function refreshToken() {
  return fetch(`${currentUrl}auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка ${res.status}`);
    }
  });
}
