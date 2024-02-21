import { useState, useContext } from "react";
import { ErrorContext } from '../contexts/ErrorContext';

export const useForm = (initialValues, onSubmitHandler, carId) => {
    const { addErrorMessage } = useContext(ErrorContext)

    const [formValues, setFormValues] = useState(initialValues);

    const onChange = (e) => {
        setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const isEmptyFields = Object.values(formValues).some(value => value === '');
        if (isEmptyFields) {
            return addErrorMessage('You cannot submit a form with missing properties')
        }

        onSubmitHandler(formValues, carId);
    }

    return {
        formValues,
        onChange,
        onSubmit,
        setFormValues
    }

}