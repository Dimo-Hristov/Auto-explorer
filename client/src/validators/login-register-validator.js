export const username = (formValues, errors, setErrors, fieldName) => {
    basicValidations(formValues, errors, setErrors, fieldName);
}


export const email = (formValues, errors, setErrors, fieldName) => {

    basicValidations(formValues, errors, setErrors, fieldName);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formValues[fieldName])) {
        setErrors(state => ({
            ...state,
            [fieldName]: 'Invalid email format',
        }));
    } else if (errors[fieldName]) {
        setErrors(state => ({
            ...state,
            [fieldName]: '',
        }));
    }

};

export const imageUrl = (formValues, errors, setErrors, fieldName) => {
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

export const age = (formValues, errors, setErrors, fieldName) => {

    if (!formValues[fieldName] || formValues[fieldName] < 18 || formValues[fieldName] > 100) {
        setErrors(state => ({
            ...state,
            [fieldName]: 'Age should be between 18 and 100 years old',
        }));
    } else if (errors[fieldName]) {
        setErrors(state => ({
            ...state,
            [fieldName]: '',
        }));
    }

}
export const password = (formValues, errors, setErrors, fieldName) => {
    basicValidations(formValues, errors, setErrors, fieldName);
}
export const rePassword = (formValues, errors, setErrors, fieldName) => {
    basicValidations(formValues, errors, setErrors, fieldName);

    if (formValues.password !== formValues.rePassword) {
        setErrors(state => ({
            ...state,
            [fieldName]: 'Passwords do not match'
        }));
    } else if (errors[fieldName]) {
        setErrors(state => ({
            ...state,
            [fieldName]: '',
        }));
    }
}

// Length >= 2 && Length > 30
function basicValidations(formValues, errors, setErrors, selectedField) {
    if (formValues[selectedField] === '' || formValues[selectedField] === undefined) {
        setErrors(state => ({
            ...state,
            [selectedField]: `${selectedField} is required`
        }));
    } else if (formValues[selectedField].length > 30) {
        setErrors(state => ({
            ...state,
            [selectedField]: `Maximum length is 30 symbols`
        }));
    } else if (formValues[selectedField].length < 2) {
        setErrors(state => ({
            ...state,
            [selectedField]: 'Minimum length is 2 symbols'
        }))

    } else if (errors[selectedField]) {
        setErrors(state => ({
            ...state,
            [selectedField]: '',
        }));
    }
}