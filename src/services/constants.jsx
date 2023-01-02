export const GET_INGREDIENTS_DATA = "GET_INGREDIENTS_DATA";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export const CONSTRUCTOR_ADD = "CONSTRUCTOR_ADD";
export const CONSTRUCTOR_DELETE = "CONSTRUCTOR_DELETE";
export const CONSTRUCTOR_RESET = "CONSTRUCTOR_RESET";
export const CONSTRUCTOR_REORDER = "CONSTRUCTOR_REORDER";

export const RESET_INGREDIENT_MODAL = "RESET_INGREDIENT_MODAL";
export const SET_INGREDIENT_MODAL = "SET_INGREDIENT_MODAL";

export const CREATE_ORDER_REQUEST = "CREATE_ORDER_REQUEST";
export const CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS";
export const CREATE_ORDER_FAILED = "CREATE_ORDER_FAILED";
export const RESET_ORDER_MODAL = "RESET_ORDER_MODAL";
export const SET_ORDER_MODAL = "SET_ORDER_MODAL";

export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_FAILED = "REGISTER_USER_FAILED";

export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_FAILED = "LOGIN_USER_FAILED";

export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
export const LOGOUT_USER = "LOGOUT_USER";
export const LOGOUT_USER_FAILED = "LOGOUT_USER_FAILED";

export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER = "GET_USER";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const CHECK_USER_AUTH = "CHECK_USER_AUTH";

export const PASSWORD_FORGOTTEN = "PASSWORD_FORGOTTEN";
export const PASSWORD_RESTORED = "PASSWORD_RESTORED";

export const mockOrder = {
    "success": true,
    "orders": [
        {
            "_id": "63af688908634b001c9af2ba",
            "ingredients": [
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733cc"
            ],
            "status": "done",
            "name": "Space spicy краторный бургер",
            "createdAt": "2022-12-30T22:39:05.817Z",
            "updatedAt": "2022-12-30T22:39:06.218Z",
            "number": 36214
        },
        {
            "_id": "63af537208634b001c9af299",
            "ingredients": [
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733cc",
                "60d3b41abdacab0026a733cf"
            ],
            "status": "pending",
            "name": "Space spicy краторный антарианский бургер",
            "createdAt": "2022-12-30T21:09:06.842Z",
            "updatedAt": "2022-12-30T21:09:07.317Z",
            "number": 36213
        },
        {
            "_id": "63af536a08634b001c9af298",
            "ingredients": [
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733cc",
                "60d3b41abdacab0026a733cf"
            ],
            "status": "done",
            "name": "Space spicy краторный антарианский бургер",
            "createdAt": "2022-12-30T21:08:58.471Z",
            "updatedAt": "2022-12-30T21:08:58.899Z",
            "number": 36212
        },
        {
            "_id": "63af40e208634b001c9af233",
            "ingredients": [
                "60d3b41abdacab0026a733cd"
            ],
            "status": "pending",
            "name": "Space бургер",
            "createdAt": "2022-12-30T19:49:54.038Z",
            "updatedAt": "2022-12-30T19:49:55.365Z",
            "number": 36211
        },
        {
            "_id": "63af40a908634b001c9af1f4",
            "ingredients": [
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733cf",
                "60d3b41abdacab0026a733cd"
            ],
            "status": "pending",
            "name": "Space антарианский бургер",
            "createdAt": "2022-12-30T19:48:57.146Z",
            "updatedAt": "2022-12-30T19:48:58.654Z",
            "number": 36210
        },
        {
            "_id": "63af37a608634b001c9aeec8",
            "ingredients": [
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733cd"
            ],
            "status": "pending",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2022-12-30T19:10:30.097Z",
            "updatedAt": "2022-12-30T19:10:30.512Z",
            "number": 36209
        },
        {
            "_id": "63af101508634b001c9aee45",
            "ingredients": [
                "60d3b41abdacab0026a733cc",
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733cf"
            ],
            "status": "pending",
            "name": "Space spicy антарианский бургер",
            "createdAt": "2022-12-30T16:21:41.893Z",
            "updatedAt": "2022-12-30T16:21:42.307Z",
            "number": 36208
        },
        {
            "_id": "63af0c5308634b001c9aee3c",
            "ingredients": [
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733cd"
            ],
            "status": "pending",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2022-12-30T16:05:39.144Z",
            "updatedAt": "2022-12-30T16:05:39.620Z",
            "number": 36207
        },
        {
            "_id": "63af083408634b001c9aee31",
            "ingredients": [
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733cc",
                "60d3b41abdacab0026a733cf",
                "60d3b41abdacab0026a733ce"
            ],
            "status": "pending",
            "name": "Space spicy традиционный-галактический антарианский бургер",
            "createdAt": "2022-12-30T15:48:04.456Z",
            "updatedAt": "2022-12-30T15:48:04.917Z",
            "number": 36206
        },
        {
            "_id": "63af080308634b001c9aee30",
            "ingredients": [
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733cf",
                "60d3b41abdacab0026a733ce"
            ],
            "status": "pending",
            "name": "Space традиционный-галактический антарианский бургер",
            "createdAt": "2022-12-30T15:47:15.740Z",
            "updatedAt": "2022-12-30T15:47:16.107Z",
            "number": 36205
        },
        {
            "_id": "63af07a308634b001c9aee2f",
            "ingredients": [
                "60d3b41abdacab0026a733cc",
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733ce"
            ],
            "status": "pending",
            "name": "Space spicy традиционный-галактический бургер",
            "createdAt": "2022-12-30T15:45:39.283Z",
            "updatedAt": "2022-12-30T15:45:39.649Z",
            "number": 36204
        },
        {
            "_id": "63aee8b108634b001c9aee0d",
            "ingredients": [
                "60d3b41abdacab0026a733ce",
                "60d3b41abdacab0026a733cf",
                "60d3b41abdacab0026a733cc",
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733c7"
            ],
            "status": "pending",
            "name": "Spicy флюоресцентный space антарианский традиционный-галактический бургер",
            "createdAt": "2022-12-30T13:33:37.033Z",
            "updatedAt": "2022-12-30T13:33:37.452Z",
            "number": 36203
        },
        {
            "_id": "63aedbda08634b001c9aeddd",
            "ingredients": [
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733cd"
            ],
            "status": "pending",
            "name": "Space краторный бургер",
            "createdAt": "2022-12-30T12:38:50.573Z",
            "updatedAt": "2022-12-30T12:38:50.975Z",
            "number": 36202
        },
        {
            "_id": "63aed95708634b001c9aedd0",
            "ingredients": [
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733cd"
            ],
            "status": "pending",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2022-12-30T12:28:07.094Z",
            "updatedAt": "2022-12-30T12:28:07.505Z",
            "number": 36201
        },
        {
            "_id": "63aecbdf08634b001c9aed8d",
            "ingredients": [
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733cf",
                "60d3b41abdacab0026a733cf"
            ],
            "status": "pending",
            "name": "Space флюоресцентный антарианский бургер",
            "createdAt": "2022-12-30T11:30:39.237Z",
            "updatedAt": "2022-12-30T11:30:39.854Z",
            "number": 36200
        },
        {
            "_id": "63aecbc308634b001c9aed87",
            "ingredients": [
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733c7"
            ],
            "status": "pending",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2022-12-30T11:30:11.663Z",
            "updatedAt": "2022-12-30T11:30:12.150Z",
            "number": 36199
        },
        {
            "_id": "63aecba308634b001c9aed81",
            "ingredients": [
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733c7"
            ],
            "status": "pending",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2022-12-30T11:29:39.102Z",
            "updatedAt": "2022-12-30T11:29:39.858Z",
            "number": 36198
        },
        {
            "_id": "63aec91f08634b001c9aed59",
            "ingredients": [
                "60d3b41abdacab0026a733cd"
            ],
            "status": "pending",
            "name": "Space бургер",
            "createdAt": "2022-12-30T11:18:55.832Z",
            "updatedAt": "2022-12-30T11:18:56.216Z",
            "number": 36197
        },
        {
            "_id": "63aec66308634b001c9aed20",
            "ingredients": [
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733cf",
                "60d3b41abdacab0026a733cd"
            ],
            "status": "done",
            "name": "Space антарианский бургер",
            "createdAt": "2022-12-30T11:07:15.097Z",
            "updatedAt": "2022-12-30T11:07:15.507Z",
            "number": 36196
        },
        {
            "_id": "63aec17008634b001c9aecf9",
            "ingredients": [
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733c7"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2022-12-30T10:46:08.699Z",
            "updatedAt": "2022-12-30T10:46:09.080Z",
            "number": 36195
        },
        {
            "_id": "63aebffd08634b001c9aecf1",
            "ingredients": [
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733c7"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2022-12-30T10:39:57.707Z",
            "updatedAt": "2022-12-30T10:39:58.090Z",
            "number": 36194
        },
        {
            "_id": "63aeb41e08634b001c9aecbf",
            "ingredients": [
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733cb",
                "60d3b41abdacab0026a733ce",
                "60d3b41abdacab0026a733cc",
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733c6"
            ],
            "status": "done",
            "name": "Краторный spicy space био-марсианский традиционный-галактический бургер",
            "createdAt": "2022-12-30T09:49:18.909Z",
            "updatedAt": "2022-12-30T09:49:19.281Z",
            "number": 36193
        },
        {
            "_id": "63ae3fa608634b001c9aec17",
            "ingredients": [
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733c7"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2022-12-30T01:32:22.661Z",
            "updatedAt": "2022-12-30T01:32:23.136Z",
            "number": 36192
        },
        {
            "_id": "63ae08da08634b001c9aeb81",
            "ingredients": [
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733cc",
                "60d3b41abdacab0026a733cf",
                "60d3b41abdacab0026a733ce"
            ],
            "status": "done",
            "name": "Space spicy традиционный-галактический антарианский бургер",
            "createdAt": "2022-12-29T21:38:34.594Z",
            "updatedAt": "2022-12-29T21:38:35.047Z",
            "number": 36191
        },
        {
            "_id": "63adf12408634b001c9aeb2c",
            "ingredients": [
                "60d3b41abdacab0026a733c8",
                "60d3b41abdacab0026a733c9",
                "60d3b41abdacab0026a733c8",
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733c7"
            ],
            "status": "done",
            "name": "Бессмертный люминесцентный флюоресцентный бургер",
            "createdAt": "2022-12-29T19:57:24.290Z",
            "updatedAt": "2022-12-29T19:57:24.649Z",
            "number": 36190
        },
        {
            "_id": "63adedea08634b001c9aeb21",
            "ingredients": [
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733ce",
                "60d3b41abdacab0026a733c9",
                "60d3b41abdacab0026a733d0",
                "60d3b41abdacab0026a733d3",
                "60d3b41abdacab0026a733d4",
                "60d3b41abdacab0026a733c7"
            ],
            "status": "done",
            "name": "Экзо-плантаго флюоресцентный минеральный астероидный бессмертный традиционный-галактический бургер",
            "createdAt": "2022-12-29T19:43:38.907Z",
            "updatedAt": "2022-12-29T19:43:39.298Z",
            "number": 36189
        },
        {
            "_id": "63ade61d08634b001c9aeae8",
            "ingredients": [
                "60d3b41abdacab0026a733cb",
                "60d3b41abdacab0026a733cb",
                "60d3b41abdacab0026a733cb",
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733c7"
            ],
            "status": "done",
            "name": "Био-марсианский флюоресцентный бургер",
            "createdAt": "2022-12-29T19:10:21.474Z",
            "updatedAt": "2022-12-29T19:10:21.850Z",
            "number": 36188
        },
        {
            "_id": "63ade28908634b001c9aeacd",
            "ingredients": [
                "60d3b41abdacab0026a733c9",
                "60d3b41abdacab0026a733c9",
                "60d3b41abdacab0026a733c9",
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733c6"
            ],
            "status": "done",
            "name": "Бессмертный краторный бургер",
            "createdAt": "2022-12-29T18:55:05.118Z",
            "updatedAt": "2022-12-29T18:55:05.508Z",
            "number": 36187
        },
        {
            "_id": "63ade0e408634b001c9aeac6",
            "ingredients": [
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733cc",
                "60d3b41abdacab0026a733cf",
                "60d3b41abdacab0026a733ce"
            ],
            "status": "done",
            "name": "Space spicy традиционный-галактический антарианский бургер",
            "createdAt": "2022-12-29T18:48:04.393Z",
            "updatedAt": "2022-12-29T18:48:04.844Z",
            "number": 36186
        },
        {
            "_id": "63addf2008634b001c9aeabf",
            "ingredients": [
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733cc",
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733c7"
            ],
            "status": "done",
            "name": "Space spicy флюоресцентный бургер",
            "createdAt": "2022-12-29T18:40:32.317Z",
            "updatedAt": "2022-12-29T18:40:32.760Z",
            "number": 36185
        },
        {
            "_id": "63adde4a08634b001c9aeab8",
            "ingredients": [
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733c6"
            ],
            "status": "done",
            "name": "Краторный бургер",
            "createdAt": "2022-12-29T18:36:58.993Z",
            "updatedAt": "2022-12-29T18:36:59.400Z",
            "number": 36184
        },
        {
            "_id": "63addb4d08634b001c9aeaae",
            "ingredients": [
                "60d3b41abdacab0026a733d4",
                "60d3b41abdacab0026a733d0",
                "60d3b41abdacab0026a733d1",
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733c6"
            ],
            "status": "done",
            "name": "Астероидный фалленианский минеральный краторный бургер",
            "createdAt": "2022-12-29T18:24:13.850Z",
            "updatedAt": "2022-12-29T18:24:14.286Z",
            "number": 36183
        },
        {
            "_id": "63addb2808634b001c9aeaad",
            "ingredients": [
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733cf",
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733c6"
            ],
            "status": "done",
            "name": "Space краторный антарианский бургер",
            "createdAt": "2022-12-29T18:23:36.329Z",
            "updatedAt": "2022-12-29T18:23:36.754Z",
            "number": 36182
        },
        {
            "_id": "63addaf708634b001c9aeaa9",
            "ingredients": [
                "60d3b41abdacab0026a733c8",
                "60d3b41abdacab0026a733c8",
                "60d3b41abdacab0026a733c8",
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733c7"
            ],
            "status": "done",
            "name": "Люминесцентный флюоресцентный бургер",
            "createdAt": "2022-12-29T18:22:47.721Z",
            "updatedAt": "2022-12-29T18:22:48.156Z",
            "number": 36181
        },
        {
            "_id": "63add8d308634b001c9aeaa5",
            "ingredients": [
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733cb",
                "60d3b41abdacab0026a733d4",
                "60d3b41abdacab0026a733c9",
                "60d3b41abdacab0026a733c7"
            ],
            "status": "done",
            "name": "Флюоресцентный астероидный бессмертный space био-марсианский бургер",
            "createdAt": "2022-12-29T18:13:39.921Z",
            "updatedAt": "2022-12-29T18:13:40.347Z",
            "number": 36180
        },
        {
            "_id": "63adc86b08634b001c9aea89",
            "ingredients": [
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733c6"
            ],
            "status": "done",
            "name": "Краторный бургер",
            "createdAt": "2022-12-29T17:03:39.427Z",
            "updatedAt": "2022-12-29T17:03:39.848Z",
            "number": 36179
        },
        {
            "_id": "63adc7f208634b001c9aea82",
            "ingredients": [
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733c6"
            ],
            "status": "done",
            "name": "Краторный бургер",
            "createdAt": "2022-12-29T17:01:38.894Z",
            "updatedAt": "2022-12-29T17:01:39.379Z",
            "number": 36178
        },
        {
            "_id": "63adc6f908634b001c9aea7c",
            "ingredients": [
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733c7"
            ],
            "status": "done",
            "name": "Флюоресцентный бургер",
            "createdAt": "2022-12-29T16:57:29.165Z",
            "updatedAt": "2022-12-29T16:57:29.587Z",
            "number": 36177
        },
        {
            "_id": "63adc63d08634b001c9aea79",
            "ingredients": [
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733c7"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2022-12-29T16:54:21.193Z",
            "updatedAt": "2022-12-29T16:54:21.587Z",
            "number": 36176
        },
        {
            "_id": "63adc54c08634b001c9aea73",
            "ingredients": [
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733cc",
                "60d3b41abdacab0026a733c7"
            ],
            "status": "done",
            "name": "Space spicy флюоресцентный бургер",
            "createdAt": "2022-12-29T16:50:20.068Z",
            "updatedAt": "2022-12-29T16:50:20.510Z",
            "number": 36175
        },
        {
            "_id": "63adb8ab08634b001c9aea47",
            "ingredients": [
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733cc",
                "60d3b41abdacab0026a733c9",
                "60d3b41abdacab0026a733c8",
                "60d3b41abdacab0026a733cb",
                "60d3b41abdacab0026a733ca",
                "60d3b41abdacab0026a733d0",
                "60d3b41abdacab0026a733ca",
                "60d3b41abdacab0026a733d1",
                "60d3b41abdacab0026a733d4",
                "60d3b41abdacab0026a733d3",
                "60d3b41abdacab0026a733d3",
                "60d3b41abdacab0026a733c6"
            ],
            "status": "done",
            "name": "Люминесцентный фалленианский экзо-плантаго краторный spicy минеральный астероидный бессмертный метеоритный био-марсианский бургер",
            "createdAt": "2022-12-29T15:56:27.503Z",
            "updatedAt": "2022-12-29T15:56:27.895Z",
            "number": 36174
        },
        {
            "_id": "63adacb408634b001c9aea02",
            "ingredients": [
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733d3",
                "60d3b41abdacab0026a733d2",
                "60d3b41abdacab0026a733d3",
                "60d3b41abdacab0026a733d2",
                "60d3b41abdacab0026a733c7"
            ],
            "status": "done",
            "name": "Экзо-плантаго флюоресцентный альфа-сахаридный бургер",
            "createdAt": "2022-12-29T15:05:24.973Z",
            "updatedAt": "2022-12-29T15:05:25.436Z",
            "number": 36173
        },
        {
            "_id": "63ada4d108634b001c9ae9eb",
            "ingredients": [
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733cf",
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733c6"
            ],
            "status": "done",
            "name": "Space краторный антарианский бургер",
            "createdAt": "2022-12-29T14:31:45.677Z",
            "updatedAt": "2022-12-29T14:31:46.152Z",
            "number": 36172
        },
        {
            "_id": "63ad9c2f08634b001c9ae9cf",
            "ingredients": [
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733cc",
                "60d3b41abdacab0026a733c7"
            ],
            "status": "done",
            "name": "Space spicy флюоресцентный бургер",
            "createdAt": "2022-12-29T13:54:55.664Z",
            "updatedAt": "2022-12-29T13:54:56.099Z",
            "number": 36171
        },
        {
            "_id": "63ad968508634b001c9ae9c4",
            "ingredients": [
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733cd"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2022-12-29T13:30:45.841Z",
            "updatedAt": "2022-12-29T13:30:46.291Z",
            "number": 36170
        },
        {
            "_id": "63ad968208634b001c9ae9c3",
            "ingredients": [
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733cd"
            ],
            "status": "done",
            "name": "Space краторный бургер",
            "createdAt": "2022-12-29T13:30:42.651Z",
            "updatedAt": "2022-12-29T13:30:43.067Z",
            "number": 36169
        },
        {
            "_id": "63ad94f208634b001c9ae9b5",
            "ingredients": [
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733cd"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2022-12-29T13:24:02.015Z",
            "updatedAt": "2022-12-29T13:24:02.415Z",
            "number": 36168
        },
        {
            "_id": "63ad92c008634b001c9ae9a9",
            "ingredients": [
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733cc",
                "60d3b41abdacab0026a733cf",
                "60d3b41abdacab0026a733c7"
            ],
            "status": "done",
            "name": "Spicy флюоресцентный антарианский бургер",
            "createdAt": "2022-12-29T13:14:40.891Z",
            "updatedAt": "2022-12-29T13:14:41.322Z",
            "number": 36167
        },
        {
            "_id": "63ad837408634b001c9ae910",
            "ingredients": [
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733cc",
                "60d3b41abdacab0026a733c6"
            ],
            "status": "done",
            "name": "Space spicy краторный бургер",
            "createdAt": "2022-12-29T12:09:24.742Z",
            "updatedAt": "2022-12-29T12:09:25.183Z",
            "number": 36166
        },
        {
            "_id": "63ad7f8708634b001c9ae8ec",
            "ingredients": [
                "60d3b41abdacab0026a733c7"
            ],
            "status": "done",
            "name": "Флюоресцентный бургер",
            "createdAt": "2022-12-29T11:52:39.533Z",
            "updatedAt": "2022-12-29T11:52:39.958Z",
            "number": 36165
        }
    ],
    "total": 36123,
    "totalToday": 22
}


