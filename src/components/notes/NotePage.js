import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForms'
import { NotesAppBar } from './NotesAppBar'

export const NotePage = () => {
    const { active: note } = useSelector(state => state.notes)
    const [formValues, handleInputChange, reset] = useForm(note);
    const { body, title, urlImage } = formValues;

    useEffect(() => {
        reset(note)
    }, [note, reset]);

    return (
        <div className="notes__main-content">
            <p>- {title}, {body}  -</p>
            <NotesAppBar />
            <div className="notes__content">
                <h5 className="notes__titles mt-5 mb-2">Entry a Title</h5>
                <input
                    type="text"
                    placeholder="Insert a title"
                    className="notes__title-input"
                    value={title}
                    onChange={handleInputChange}

                />

                <h5 className="notes__titles mt-5 mb-2">Please write a description</h5>

                <textarea
                    placeholder="what happend today"
                    className="notes__description-input"
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
