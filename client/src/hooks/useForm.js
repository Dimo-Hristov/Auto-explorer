import { useState } from "react"

export const useForm = (initialValues, onSubmitHandler, carId) => {

    const [formValues, setFormValues] = useState(initialValues);

    const onChange = (e) => {
        setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const isEmptyFields = Object.values(formValues).some(value => value === '');
        if (isEmptyFields) {
            return
        }

        onSubmitHandler(formValues, carId);
    }

    return {
        formValues,
        onChange,
        onSubmit,
    }

}