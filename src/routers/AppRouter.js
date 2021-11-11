import React from 'react'
import {
    BrowserRouter as Router,
    Switch, Route
} from 'react-router-dom'
import { LogingPage } from '../components/auth/LogingPage'
import { RegisterPage } from '../components/auth/RegisterPage'
import { HomePage } from '../components/home/HomePage'
import { JournalPage } from '../components/journal/JournalPage'



export const AppRouter = () => {
    return (
        <div>
            <h1>App Router</h1>


            <Router>
                <div>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route exact path='/login' component={LogingPage} />
                        <Route exact path='/register' component={RegisterPage} />
                        <Route exact path='/journal' component={JournalPage} />

                    </Switch>

                </div>

            </Router>
        </div>

    )
}
