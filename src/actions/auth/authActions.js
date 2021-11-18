import { types } from "../../types/types"

export const authLogin = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})



