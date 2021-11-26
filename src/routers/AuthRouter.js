import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { LogingPage } from '../components/auth/LogingPage'
import { RegisterPage } from '../components/auth/RegisterPage'
export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route exact path='/auth/login' component={LogingPage} />
                    <Route exact path='/auth/register' component={RegisterPage} />
                    <Redirect to='/auth/login' />
                </Switch>
            </div>
        </div>
    )
}
