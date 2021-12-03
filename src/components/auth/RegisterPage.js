import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeError, showError } from '../../actions/alerts/alerts';
import { startRegisterWithEmailAndPasword } from '../../actions/auth/authActions';
import { useForm } from '../../hooks/useForms';



export const RegisterPage = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.alert);

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        checkEmail: '',
        password: '',
        checkPass: ''
    })

    const { name, email, checkEmail, password, checkPass } = formValues;

    const handleRegister = (e) => {
        e.preventDefault()
        const validation = isFormValid()
        if (validation) {
            dispatch(startRegisterWithEmailAndPasword(email, password, name))
        } else {
            console.log('Invalid Form', validation)
        }
    };

    const isFormValid = () => {
        const nameValid = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(name);
        const emailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        const checkEmailValid = checkEmail.trim() === email.trim();
        const passwordValidate = /^[^-s][a-zA-Z0-9_s-]+$/.test(password) && password.length > 5;
        const checkPassValid = checkPass.trim() === password.trim();

        console.log('==> ', nameValid, emailValid, checkEmailValid, passwordValidate, checkPassValid)
        if (nameValid && emailValid && checkEmailValid && passwordValidate && checkPassValid) {
            dispatch(removeError())
            return true
        } else if (!nameValid) {
            dispatch(showError('Name is invalid!!!'));
            return false
        } else if (!emailValid) {
            dispatch(showError('Email invalid!!!'));
            return false
        } else if (!checkEmailValid) {
            dispatch(showError('Check email invalid!!!'))
            return false
        } else if (!passwordValidate) {
            dispatch(showError('Password invalid!!!'))
            return false
        } else if (!checkPassValid) {
            dispatch(showError('Check pass invalid!!!'))
            return false
        }
    }



    return (
        <>
            <div className="container">
                <h3 className="auth__title text-center mb-5">Register Page</h3>
                {msgError &&
                    (<div className="alert">
                        <h4>ERROR FORM!!!</h4>
                        <p>{msgError}</p>
                        <ol>

                        </ol>
                    </div>
                    )
                }
                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        className="auth__input"
                        placeholder="First Name"
                        name="name"
                        value={name}
                        onChange={handleInputChange}

                    />
                    <input
                        type="email"
                        className="auth__input"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />

                    <input
                        type="email"
                        className="auth__input"
                        placeholder="Check Email"
                        name="checkEmail"
                        value={checkEmail}
                        onChange={handleInputChange}

                    />
                    <input
                        type="password"
                        className="auth__input"
                        placeholder="Password"
                        autoComplete="off"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        className="auth__input"
                        placeholder="Check Pass"
                        autoComplete="off"
                        name="checkPass"
                        value={checkPass}
                        onChange={handleInputChange}
                    />
                    <button
                        type="submit"
                        className="btn btn-block btn-primary mb-5 mt-5"
                        disabled={false}

                    >
                        Register
                    </button>

                </form>
            </div>
            <hr />

            <div className="container container-center auth__social-background radius-bottom">
                <p className="text-center mt-5 mb-5"><strong>Login with social media</strong> </p>
                <div className="google-btn">

                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>
                <Link to='/auth/login' className="auth__new-account">
                    Already Register?
                </Link>
            </div>
        </>
    )
}

