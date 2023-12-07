import { useEffect, useState } from "react";
import * as loginRegisterValidation from '../validators/login-register-validator';
import * as publishCarValidation from '../validators/publish-car-validator';

export const useFormValidate = (formValues, formType) => {
    let validators;


    if (formType === 'login-register') {
        validators = loginRegisterValidation;
    } else if (formType === 'publish-car') {
        validators = publishCarValidation;
    } else {
        alert('Invalid form type !')
    }

    const [errors, setErrors] = useState({});

    const validatorsHandler = (fieldName) =>
        () => validators[fieldName](formValues, errors, setErrors, fieldName);

    const [isFormValid, setIsFormValid] = useState(true);

    useEffect(() => {
        const hasErrors = Object.values(errors).some(error => error !== "");
        const hasEmptyfields = Object.values(formValues).some(value => value === '' || undefined)
        setIsFormValid(!hasErrors && !hasEmptyfields);
    }, [errors, formValues]);


    return {
        validatorsHandler,
        errors,
        isFormValid
    }
}