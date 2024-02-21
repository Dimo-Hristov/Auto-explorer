export const brand = (formValues, errors, setErrors, fieldName) => {
    basicValidations(formValues, errors, setErrors, fieldName);
}

export const model = (formValues, errors, setErrors, fieldName) => {
    basicValidations(formValues, errors, setErrors, fieldName);
}

export const price = (formValues, errors, setErrors, fieldName) => {
    const currentInput = formValues[fieldName];

    if (currentInput < 0) {
        setErrors(state => ({
            ...state,
            [fieldName]: 'Price should be a posotive number'
        }))
    } else if (currentInput === '' || currentInput === undefined) {
        setErrors(state => ({
            ...state,
            [fieldName]: `${fieldName} is required`
        }))
    } else if (currentInput > 5000000) {
        setErrors(state => ({
            ...state,
            [fieldName]: 'Maximum price is 5 milions'
        }))
    } else if (errors[fieldName]) {
        setErrors(state => ({
            ...state,
            [fieldName]: '',
        }));
    }
}

export const year = (formValues, errors, setErrors, fieldName) => {
    const currentInput = formValues[fieldName];

    if (currentInput > 2023) {
        setErrors(state => ({
            ...state,
            [fieldName]: 'Production year cannot be greater  than 2023'
        }))
    } else if (currentInput < 1940) {
        setErrors(state => ({
            ...state,
            [fieldName]: 'Production year cannot be lower than 1940'
        }))
    } else if (errors[fieldName]) {
        setErrors(state => ({
            ...state,
            [fieldName]: '',
        }));
    }
}

export const color = (formValues, errors, setErrors, fieldName) => {
    basicValidations(formValues, errors, setErrors, fieldName)
}

export const engine = (formValues, errors, setErrors, fieldName) => {
    basicValidations(formValues, errors, setErrors, fieldName)
}

export const hp = (formValues, errors, setErrors, fieldName) => {
    basicValidations(formValues, errors, setErrors, fieldName)

    if (formValues[fieldName] < 50) {
        setErrors(state => ({
            ...state,
            [fieldName]: 'HP cannot be lower than 50'
        }))
    } else if (errors[fieldName]) {
        setErrors(state => ({
            ...state,
            [fieldName]: '',
        }));
    }
}

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
    } else if (errors[selectedField]) {
        setErrors(state => ({
            ...state,
            [selectedField]: '',
        }));
    }
}