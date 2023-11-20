import { useState } from "react"

export const useForm = (initialValues, onSubmitHandler) => {

    const [formValues, setFormValues] = useState(initialValues);

    const onChange = (e) => {
        setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler(formValues);
    }

    return {
        formValues,
        onChange,
        onSubmit,
    }

}