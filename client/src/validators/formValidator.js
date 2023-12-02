export const usernameValidator = (formValues, errors, setErrors, fieldName) => {
    basicValidations(formValues, errors, setErrors, fieldName);
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
