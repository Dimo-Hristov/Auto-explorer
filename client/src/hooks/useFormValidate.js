import { useState } from "react";

export const useFormValidate = (formValues) => {
    const validators = {
        username,
        email,
        imageUrl,
        age,
        password,
        rePassword
    }

    const [errors, setErrors] = useState({});

    const validatorsHandler = (fieldName) =>
        () => validators[fieldName](formValues, errors, setErrors, fieldName);



    return {
        validatorsHandler,
        errors
    }


}

const username = (formValues, errors, setErrors, fieldName) => {
    basicValidations(formValues, errors, setErrors, fieldName);
}


const email = (formValues, errors, setErrors, fieldName) => {
    // Basic validations (empty check and length check)
    basicValidations(formValues, errors, setErrors, fieldName);

    // Email-specific validation only if basic validations pass
    if (!errors[fieldName]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formValues[fieldName])) {
            setErrors(state => ({
                ...state,
                [fieldName]: 'Invalid email format',
            }));
            console.log(errors);
        } else {
            // Clear the error if the email format is valid
            if (errors[fieldName]) {
                setErrors(state => ({
                    ...state,
                    [fieldName]: '',
                }));
            }
        }
    }
};

const imageUrl = (formValues, errors, setErrors, fieldName) => {
    const urlRegex = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}(\/[^/#?]+)+\.(jpg|jpeg|png|gif|bmp)$/i;

    if (!formValues[fieldName]) {
        setErrors(state => ({
            ...state,
            [fieldName]: `${fieldName} is required`
        }));
    } else if (formValues[fieldName] && !urlRegex.test(formValues[fieldName])) {
        setErrors(state => ({
            ...state,
            [fieldName]: 'Invalid image URL format',
        }));
    } else {
        setErrors(state => ({
            ...state,
            [fieldName]: '',
        }));
    }


}

const age = (formValues, errors, setErrors, fieldName) => {

    if (!formValues[fieldName] || formValues[fieldName] < 18 || formValues[fieldName] > 100) {
        setErrors(state => ({
            ...state,
            [fieldName]: 'Age should be between 18 and 100 years old',
        }));
    } else {
        if (errors[fieldName]) {
            setErrors(state => ({
                ...state,
                [fieldName]: '',
            }));
        }
    }
}
const password = (formValues, errors, setErrors, fieldName) => {
    basicValidations(formValues, errors, setErrors, fieldName);
}
const rePassword = (formValues, errors, setErrors, fieldName) => {
    basicValidations(formValues, errors, setErrors, fieldName);

    if (formValues.password !== formValues.rePassword) {
        setErrors(state => ({
            ...state,
            [fieldName]: 'Passwords do not match'
        }));
    } else {
        setErrors(state => ({
            ...state,
            [fieldName]: '',
        }));
    }
}

// Length > 0 && Length > 30
function basicValidations(formValues, errors, setErrors, selectedField) {
    if (formValues[selectedField] === '') {
        setErrors(state => ({
            ...state,
            [selectedField]: `${selectedField} is required`
        }));
    } else {
        if (errors[selectedField]) {
            setErrors(state => ({
                ...state,
                [selectedField]: '',
            }));
        }
    }

    if (formValues[selectedField].length > 30) {
        setErrors(state => ({
            ...state,
            [selectedField]: `Maximum length is 30 symbols`
        }));
    } else {
        if (errors[selectedField]) {
            setErrors(state => ({
                ...state,
                [selectedField]: '',
            }));
        }
    }
}