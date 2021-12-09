import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForms'
import { NotesAppBar } from './NotesAppBar'

export const NotePage = () => {
    const { notes } = useSelector(state => state)
    const note = notes.active
    console.log('new note => ', note)
    const [formValues, handleInputChange, reset] = useForm(note);
    const { body, title, urlImage } = formValues;

    const activeId = useRef(note.id)

    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note
        }
    }, [note, reset]);

    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <p>=- {title} --------- {body} -=</p>
                <h5 className="notes__titles mt-5 mb-2">Entry a Title</h5>
                <input
                    type="text"
                    placeholder="Insert a title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    value={title}
                    onChange={handleInputChange}

                />

                <h5 className="notes__titles mt-5 mb-2">Please write a description</h5>

                <textarea
                    placeholder="what happend today"
                    className="notes__description-input"
                    autoComplete="off"
                    name="body"
                    value={body}
                    onChange={handleInputChange}

                />

                <div className="notes__image">
                    <img src={urlImage} alt={title} />

                </div>


            </div>

        </div>
    )
}
