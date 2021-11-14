import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {
    return (
        <>
            <div className="container">
                <h3 className="auth__title text-center mb-5">Register Page</h3>
                <form>
                    <input
                        type="text"
                        className="auth__input"
                        placeholder="User"
                        name="user"

                    />
                               <input
                        type="email"
                        className="auth__input"
                        placeholder="Email"
                        name="email"

                    />

<input
                        type="email"
                        className="auth__input"
                        placeholder="Check Email"
                        name="checkEmail"

                    />
                    <input
                        type="password"
                        className="auth__input"
                        placeholder="Password"
                        autoComplete="off"
                        name="password"
                    />
                            <input
                        type="password"
                        className="auth__input"
                        placeholder="Check Pass"
                        autoComplete="off"
                        name="checkPassValid"
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

