import { REGISTER_USER_SUCCESS,
    REGISTER_USER,
    REGISTER_USER_FAILED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    LOGOUT_USER,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILED,
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_FAILED,
    PASSWORD_FORGOTTEN,
    PASSWORD_RESTORED  } from "../services/constants";



type TRegisterUserAction = {
    readonly type: typeof REGISTER_USER;
}

type TRegisterUserSuccessAction = {
    readonly type: typeof REGISTER_USER_SUCCESS;
    payload: {name:string, email:string}
}

type TRegisterUserFailedAction = {
    readonly type: typeof REGISTER_USER_FAILED;
    payload: string
}

type TLoginUserAction = {
    readonly type: typeof LOGIN_USER;
}

type TLoginUserActionSuccess = {
    readonly type: typeof LOGIN_USER_SUCCESS;
    payload: {name:string, email:string}
}

type TLoginUserActionFailed = {
    readonly type: typeof LOGIN_USER_FAILED;
    payload: string;
}

type TLogoutUserAction = {
    readonly type: typeof LOGOUT_USER;
}

type TLogoutUserSuccessAction = {
    readonly type: typeof LOGOUT_USER_SUCCESS;
}

type TLogoutUserFailedAction = {
    readonly type: typeof LOGOUT_USER_FAILED;
    payload:string;
}

type TGetUserAction = {
    readonly type: typeof GET_USER;
}

type TGetUserSuccessAction = {
    readonly type: typeof GET_USER_SUCCESS;
    payload: {name:string, email:string}
}

type TGetUserFailedAction = {
    readonly type: typeof GET_USER_FAILED;
    payload:string;
}

type TPasswordForgottenAction = {
    readonly type: typeof PASSWORD_FORGOTTEN;
}

type TPasswordRestoredAction = {
    readonly type: typeof PASSWORD_RESTORED;
}

export type TUserActions = 
|TGetUserAction
|TGetUserFailedAction
|TGetUserSuccessAction
|TLoginUserAction
|TLoginUserActionFailed
|TLoginUserActionSuccess
|TLogoutUserAction
|TLogoutUserFailedAction
|TLogoutUserSuccessAction
|TPasswordForgottenAction
|TPasswordRestoredAction
|TRegisterUserAction
|TRegisterUserFailedAction
|TRegisterUserSuccessAction

export type TUserState = {
    email: string,
  name: string,
  registerUserError: null|string,
  registerUserRequest: boolean,
  loginUserRequest: boolean,
  loginUserError: null|string,
  logoutUserRequest: boolean,
  logoutUserError: null|string,
  getUserRequest: boolean,
  getUserError: null|string,
  passwordForgotten: boolean,
}