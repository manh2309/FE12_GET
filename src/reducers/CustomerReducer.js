import * as types from "../constant";

const DEFAULTE_STATE = {
    listItem: [],
    dataFetching: false,
    isFetching: false,
    error: false,
    errorMessage: null
}

export default (state = DEFAULTE_STATE, action) => {
    switch (action.type) {
        case types.GET_CUSTOMER_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.GET_CUSTOMER_SUCCESS:
            return {
                ...state,
                dataFetching: true,
                isFetching: false,
                error: false,
                errorMessage: null,
                listItem: action.payload
            }
        case types.GET_CUSTOMER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }
        default:
            return state
    }
}