import { useState } from "react"

export const useLogin = (initialState = {}) => {
    const [loginValues, setLoginValues] = useState(initialState);

    const reset = () => {
        setLoginValues(initialState)
    }

    const handleInputChange = ({ target }) => {
        setLoginValues({
            ...loginValues,
            [target.name]: target.value,
        });
    }

    return [loginValues, handleInputChange, reset]

}