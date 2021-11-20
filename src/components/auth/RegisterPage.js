import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForms'

export const RegisterPage = () => {

    const [formValues, handleInputChange] = useForm({
        name: 'Leo Gonzalez',
        email: 'genoma3d@gmail.com',
        checkEmail: 'genoma3d@gmail.com',
        password: '12345678',
        checkPass: '12345678'
    })


    const { name, email, checkEmail, password, checkPass } = formValues;

    const handleRegister = (e) => {
        e.preventDefault()
        if (isFormValid()) {
            console.log('userRegister => ', name, email, checkEmail, password, checkPass)
        } else {
            console.log('Invalid Form')
        }

    };

    const isFormValid = () => {

        const nameValid = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
        console.log('name => ', nameValid.test(name.trim()), ' => ', name.trim())

        const emailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        console.log('email => ', emailValid.test(email.trim()), ' => ', email.trim())

        const checkEmailValid = checkEmail.trim() === email.trim();
        console.log('check email => ', checkEmailValid);

        const passwordValidate = /^[^-s][a-zA-Z0-9_s-]+$/
        console.log('password => ', passwordValidate.test(password.trim()), ' => ', password);

        const checkPassValid = checkPass.trim() === password.trim();
        console.log('check pass => ', checkPassValid);

        if (nameValid && emailValid && checkEmailValid && passwordValidate && checkPassValid) {
            console.log('Form is correct')
            return true
        } else {
            console.log('Form is NOT correct')
            return false
        }
    };


    return (
        <>
            <div className="container">
                <h3 className="auth__title text-center mb-5">Register Page</h3>
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

