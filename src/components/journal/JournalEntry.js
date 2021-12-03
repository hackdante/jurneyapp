import React from 'react'

export const JournalEntry = ({ id, date, title, body, urlImage = 'https://live.staticflickr.com/65535/51683440632_8c9ddac384_s.jpg' }) => {
    console.log('========>', id, date, title, body, urlImage)
    return (
        <div className="journal__entry pointer">


            <div className="journal__entry-picture" style={{
                backgroundSize: 'cover',
                backgroundImage: `url(${urlImage})`
            }}>
            </div>
            <div className="journal__entry-body ml-3">
                <h4 className="journal__entry-title">{title}</h4>
                <p className="journal__entry-description">{body}</p>
            </div>

            <div className="journal__entry-date-box mr-3">
                <span>Monday</span>
                <h4>28</h4>
            </div>


        </div>
    )
}
