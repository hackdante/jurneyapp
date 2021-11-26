import { types } from "../types/types";

const initialState = {
    loading: false,
    msgError: null
}

export const alertReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.showError:
            return ({
                ...state,
                msgError: action.payload
            });
        case types.removeError:
            return ({
                ...state,
                msgError: null
            });
        case types.uiStartLoading:
            return ({
                ...state,
                loading: true
            })

        case types.uiFinishLoading:
            return ({
                ...state,
                loading: false

            })
        default:
            return state;
    }


}
