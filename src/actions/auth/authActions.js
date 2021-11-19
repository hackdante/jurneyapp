//import { googleAuthProvider } from '../../firebase/firebase-config';

import { getAuth, signInWithPopup } from "@firebase/auth";
import { googleAuthProvider } from "../../firebase/firebase-config";

import { types } from "../../types/types"


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(authLogin(123456, 'genoma3d'))
        }, 3500);

    }
}


export const startGoogleLogin = () => {
    return (dispatch) => {

        const auth = getAuth()
        signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
            console.log('User ====> ', user)
            dispatch(authLogin(user.uid, user.displayName))

        }

        )



    }

}

// export const startGoogleLogin = () => {
//     return (dispatch) => {
//         const auth = getAuth();
//         signInWithPopup(auth, googleAuthProvider)
//             .then(({ user }) => {
//                 dispatch(authLogin(user.uid, user.displayName))
//             });
//     }
// }

export const authLogin = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})



