import React from 'react'
import moment from 'moment'
import { activeNote } from '../../actions/notes/notes'
import { useDispatch } from 'react-redux'


export const JournalEntry = ({ id, date, title, body, urlImage = 'https://live.staticflickr.com/65535/51683440632_8c9ddac384_s.jpg' }) => {
    const noteDate = moment(date)
    const dispatch = useDispatch()


    const handleGoToEntry = () => {
        console.log('Entry')
        dispatch(activeNote(id, {
            title,
            body,
            date,
            urlImage

        }))
    }

    return (
        <div className="journal__entry pointer" onClick={handleGoToEntry}>


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
                <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('Do')}</h4>
            </div>


        </div>
    )
}
