import { getCookie, setCookie } from "./cookie";
import { currentUrl } from "./data";

const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const registerUser = (user) => {
  return fetch(`${currentUrl}auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
};

export const loginUser = (user) => {
  return fetch(`${currentUrl}auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
  return fetchWithRefresh(`${currentUrl}auth/user`, {
    headers: {
      authorization: getCookie("accessToken"),
    },
  });
};

export const updateUserData = (newData) => {
  console.log(newData);
  return fetchWithRefresh(`${currentUrl}auth/user`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      authorization: getCookie("accessToken"),
    },
    body: JSON.stringify(newData),
  });
};

const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (error) {
    if (error.message === "jwt expired") {
      const refreshData = await refreshToken();
      if (!refreshData.success) {
        Promise.reject(refreshData);
      }

      localStorage.setItem("refreshToken", refreshData.refreshToken);
      setCookie("accessToken", refreshData.accessToken);

      options.headers.authorization = refreshData.accessToken;

      const res = fetch(url, options);
      return await checkResponse(res);
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
