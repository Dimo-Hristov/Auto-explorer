import { useState } from "react"

export const useForm = (initialValues, onSubmitHandler, carId) => {

    const [formValues, setFormValues] = useState(initialValues);

    const onChange = (e) => {
        setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler(formValues, carId);
    }

    return {
        formValues,
        onChange,
        onSubmit,
    }

}