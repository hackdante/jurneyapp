import React from 'react'
import { useSelector } from 'react-redux'
import { NotePage } from '../notes/NotePage'
import { NothingSelected } from './NothingSelected'
import { Sidebar } from './Sidebar'

export const JournalPage = () => {

    const { notes } = useSelector(state => state)

    return (
        <div className="journal__main-content">
            <Sidebar />
            <main>

                {(notes.active)
                    ? <NotePage />
                    : <NothingSelected />
                }


            </main>
        </div>
    )
}
