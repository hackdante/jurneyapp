import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div className="journal__entry-picture" style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://live.staticflickr.com/65535/51683440632_8c9ddac384_s.jpg)'
            }}>
            </div>
            <div className="journal__entry-body ml-3">
                <h4 className="journal__entry-title">Title Entry</h4>
                <p className="journal__entry-description">Description of the Journal entry in this box.</p>
            </div>

            <div className="journal__entry-date-box mr-3">
                <span>Monday</span>
                <h4>28</h4>

            </div>


        </div>
    )
}
