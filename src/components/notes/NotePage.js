import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NotePage = () => {
    const imgURL = 'https://live.staticflickr.com/65535/51686899088_b98eee5121_s.jpg'
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
            <h5 className="notes__titles mt-5 mb-2">Entry a Title</h5>
                <input
                    type="text"
                    placeholder="Insert a title"
                    className="notes__title-input"
                />

                <h5 className="notes__titles mt-5 mb-2">Please write a description</h5>

                <textarea
                    placeholder="what happend today"
                    className="notes__description-input"
                />

                <div className="notes__image">
                    <img src={imgURL} alt="Title" />

                </div>


            </div>

        </div>
    )
}
