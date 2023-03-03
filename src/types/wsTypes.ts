import { StringLiteral } from "typescript";
import { WS_USER_SUCCESS,
    WS_ALL_SUCCESS,
    WS_USER_ORDERS,
    WS_ALL_ORDERS,
    WS_USER_ERROR,
    WS_ALL_ERROR,
    WS_USER_CLOSED,
    WS_ALL_CLOSED, WS_USER_CONNECT, WS_ALL_CONNECT } from "../services/constants";



export type TWSOrder = {
    ingredients: Array<string>;
    _id: string;
    status: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
    count?:number
}


export type TOrders = {
    total?: number;
    totalToday?: number;
    orders?: Array<TWSOrder>;
}

export type TWsUserConnectAction = {
    readonly type: typeof WS_USER_CONNECT;
    payload?: string;
}
export type TWsAllConnectAction = {
    readonly type: typeof WS_ALL_CONNECT;
    payload?:string;
}

export type TWsUserSuccessAction = {
    readonly type: typeof WS_USER_SUCCESS;
}
export type TWsAllSuccessAction = {
    readonly type: typeof WS_ALL_SUCCESS;
}

export type TWsUserErrorAction = {
    readonly type: typeof WS_USER_ERROR;
    payload:Event
}
export type TWsAllErrorAction = {
    readonly type: typeof WS_ALL_ERROR;
    payload:Event
}

export type TWsUserClosedAction = {
    readonly type: typeof WS_USER_CLOSED;
}
export type TWsAllClosedAction = {
    readonly type: typeof WS_ALL_CLOSED;
}

export type TWsUserOrdersAction = {
    readonly type: typeof WS_USER_ORDERS;
    payload: TOrders;
}
export type TWsAllOrdersAction = {
    readonly type: typeof WS_ALL_ORDERS;
    payload: TOrders
}

export type TWsMiddlewareActions = {
    wsInit: 'WS_USER_CONNECT' | 'WS_ALL_CONNECT',
    onOpen: 'WS_USER_SUCCESS' | 'WS_ALL_SUCCESS',
    onClose: 'WS_USER_CLOSED' | 'WS_ALL_CLOSED',
    onError: 'WS_USER_ERROR' | 'WS_ALL_ERROR',
    onMessage: 'WS_USER_ORDERS' | 'WS_ALL_ORDERS'
  }

export type TWsActions = 
|TWsAllClosedAction
|TWsAllErrorAction
|TWsAllOrdersAction
|TWsAllSuccessAction
|TWsUserClosedAction
|TWsUserErrorAction
|TWsUserSuccessAction
|TWsUserOrdersAction
|TWsAllConnectAction
|TWsUserConnectAction

export type TWsState = {
    allOrdersConnection: boolean,
    userOrdersConnection: boolean,
    public: TOrders,
    personal: TOrders,
    allOrdersError: boolean|string|null|Event,
    userOrdersError: boolean|string|null|Event,
}