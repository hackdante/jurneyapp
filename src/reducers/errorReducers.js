import { errorTypes } from "../types/errorTypes";

const initialState = {
    msgError: null
}

export const errorReducers = (state = initialState, action) => {
    console.log('action type ==> ', action.type)
    switch (action.type) {
        case errorTypes.userNotFound:
            return ({
                ...state,
                msgError: action.payload
            });

        case errorTypes.invalidEmail:
            return ({
                ...state,
                msgError: action.payload
            });

        case errorTypes.unauthorizedContinueUri:
            return ({
                ...state,
                msgError: action.payload
            });

        default:
            return state;
    }


}
