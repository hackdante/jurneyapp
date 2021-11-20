import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth/authActions'
import { useForm } from '../../hooks/useForms'


export const LogingPage = () => {

    const dispatch = useDispatch()

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: '',
    })


    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(email === '' && 'Email is empty' , password === '' && 'Password is empty')
        dispatch(startLoginEmailPassword(email, password))
    }

    const handleLoginGoogle = () => {
        dispatch(startGoogleLogin())
    }

    return (
        <>
            <div className="container">
                <h3 className="auth__title text-center mb-5">Loging Page</h3>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        className="auth__input"
                        placeholder="User"
                        name="email"
                        value={email}
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
                    <button
                        type="submit"
                        className="btn btn-block btn-primary mb-5 mt-5"
                        disabled={false}
                    >
                        Submit
                    </button>

                </form>
            </div>
            <hr />

            <div className="container container-center auth__social-background radius-bottom">
                <p className="text-center mt-5 mb-5"><strong>Login with social media</strong> </p>
                <div
                    className="google-btn"
                    onClick={handleLoginGoogle}
                >

                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>
                <Link to='/auth/register' className="auth__new-account">
                    Create a New Account
                </Link>
            </div>
        </>
    )
}
