
import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AuthRouter } from './AuthRouter'
import { HomePage } from '../components/home/HomePage'
import { JournalPage } from '../components/journal/JournalPage'

import { authLogin } from '../actions/auth/authActions';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
    const auth = getAuth();
    const dispatch = useDispatch()

    const [check, setCheck] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                dispatch(authLogin(user.uid, user.displayName))
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false)
            }
            setCheck(false)
        });

    }, [auth, dispatch, check]);

    if (check) {
        return (<h1>Espere...{JSON.stringify(check)} </h1>)
    }

    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <PublicRoutes
                            isAuth={isLoggedIn}
                            path='/auth'
                            component={AuthRouter}
                        />
                        <PrivateRoutes
                            exact
                            isAuth={isLoggedIn}
                            path='/journal'
                            component={JournalPage}
                        />
                        <Route exact path='/' component={HomePage} />
                        <Redirect to='/' />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
