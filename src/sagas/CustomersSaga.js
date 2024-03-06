import { put, takeEvery } from "redux-saga/effects";
import {delAPI,callApi} from "../fetchAPI/CustomerAPI";
import * as types from "../constant";
function* getListCustomer() {
    try {
        const res = yield callApi();
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
function* delCustomerSaga({payload}) {
    try {
        const res = yield delAPI(payload);
        yield put({
            type: types.DELETE_CUSTOMER_SUCCESS,
            payload: res
        })
        yield getListCustomer();
    } catch (error) {
        yield put({
            type: types.DELETE_CUSTOMER_FAILURE,
            payload: {
                messageError: error.message
            }
        })
    }
}

export const CustomerSaga = [
    takeEvery(types.GET_CUSTOMER_REQUEST, getListCustomer),
    takeEvery(types.DELETE_CUSTOMER_REQUEST, delCustomerSaga),
    
]
