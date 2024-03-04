import * as types from "../constant"
export function getListCustomer(payload) {
    return ({
        type: types.GET_CUSTOMER_REQUEST,
        payload
    })
} 