import { useState } from "react"

export const useForm = (initialState = {}) => {
    const [formValues, setFormValues] = useState(initialState);

    const reset = (updateForm = initialState) => {
        console.log('updates => ', updateForm)
        setFormValues(updateForm)
    }

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value,
        });
    }

    return [formValues, handleInputChange, reset]

}