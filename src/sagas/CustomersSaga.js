import { put, takeEvery } from "redux-saga/effects";
import CustomerApi from "../fetchAPI/CustomerAPI";
import * as types from "../constant";
function* getListCustomer() {
    try {
        const res = yield CustomerApi();
        yield put({
            type: types.GET_CUSTOMER_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.GET_CUSTOMER_FAILURE,
            payload: {
                messageError: error.message
            }
        })
    }
}

export const CustomerSaga = [
    takeEvery(types.GET_CUSTOMER_REQUEST, getListCustomer)
]