import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup } from "@firebase/auth";

import { googleAuthProvider } from "../../firebase/firebase-config";
import { types } from "../../types/types"
import { finishLoading, startLoading } from "../loaders/loadersActions";
import Swal from "sweetalert2";
import { errorTypes } from "../../types/errorTypes";





export const startLoginEmailPassword = (email, password) => {

    return (dispatch) => {
        dispatch(startLoading());
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
            dispatch(authLogin(user.uid, user.displayName))
            dispatch(finishLoading())
        }).catch(error => {
            dispatch(finishLoading())
            switch (error.code) {
                case errorTypes.invalidEmail:
                    Swal.fire(
                        `Error ${error.code}`,
                        'The provided value for the email user property is invalid. It must be a string email address.',
                        'error')
                    break;

                case errorTypes.userNotFound:
                    Swal.fire(
                        `Error ${error.code}`,
                        'There is no existing user record corresponding to the provided identifier.',
                        'error')
                    break;

                case errorTypes.unauthorizedContinueUri:
                    Swal.fire(
                        `Error ${error.code}`,
                        'The domain of the continue URL is not whitelisted. Whitelist the domain in the Firebase Console.',
                        'error')
                    break;

                default:
                    Swal.fire('Unidentified Error', 'An unknown error has been generated, please contact the administrator.', 'error')
                    break;
            }
        })
    }
}

export const startRegisterWithEmailAndPasword = (email, password, name) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(user, { displayName: name, photoURL: '' })
                dispatch(authLogin(user.uid, user.displayName))
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMsg = error.message
                Swal.fire(errorCode, errorMsg, 'error')

            })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
            console.log('User ====> ', user)
            dispatch(authLogin(user.uid, user.displayName))
        })
    }
}

export const authLogin = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLogout = () => {
    const auth = getAuth();
    return (dispatch) => {
        signOut(auth).then(() => {
            console.log('Now is logout');
            dispatch(authLogout())
        }).catch((error) => {
            console.log('error => ', error)
        });
    }
}

export const authLogout = () => ({
    type: types.logout
})
