import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth/authActions'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(startLogout())
    }




    return (
        <aside className="journal__sidebar dark">
            <div className="journal__header">
                <div className="journal__aside-header">
                    <div className="journal__title ml-5">
                        <i className="fas fa-user-tie journal__icon" />
                        <span className="ml-3">Leandro Gonzalez</span>
                    </div>
                    <button className="btn dark mr-5" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
            <div className="journal__body ">
                <div
                    className="journal__new-entry dark mt-3 mb-3 pointer">
                    <i className="far fa-calendar-plus journal__icon-entry" />
                    <h5 className="ml-3 journal__btn-new-entry-style">New Entry</h5>
                </div>
            </div>

            < JournalEntries />




        </aside>
    )
}
