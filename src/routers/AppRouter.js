import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import { AuthRouter } from './AuthRouter'
import { HomePage } from '../components/home/HomePage'
import { JournalPage } from '../components/journal/JournalPage'

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route path='/auth' component={AuthRouter} />
                        <Route exact path='/journal' component={JournalPage} />
                        <Route exact path='/' component={HomePage} />
                        <Redirect to='/' />
                    </Switch>
                </div>
            </Router>
        </div>

    )
}
