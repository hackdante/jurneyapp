import React from 'react'
import { JournalEntry } from './JournalEntry'
import { useSelector } from 'react-redux'

export const JournalEntries = () => {
    const { notes } = useSelector(state => state);
    const allNotes = notes.notes

    return (
        <div className="journal__entries">
            <h1>Entries Here</h1>
            {allNotes.map(note => (
                <JournalEntry
                    key={note.id}
                    {...note}
                />

            ))}
        </div>
    )
}
