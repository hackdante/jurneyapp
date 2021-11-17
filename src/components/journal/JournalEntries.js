import React from 'react'
import { JournalEntry } from './JournalEntry'

export const JournalEntries = () => {
    const entries = [1,2,3,4,5,6,7,8]
   // const entries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    // const entries = [1,2,3,4]
    return (
        <div className="journal__entries">
            <h1>Entries Here</h1>
            {entries.map(value => (
                <JournalEntry key={value} />
            ))}
        </div>
    )
}
