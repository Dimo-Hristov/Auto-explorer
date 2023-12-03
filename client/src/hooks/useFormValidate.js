import { useState } from "react";
import * as loginRegisterValidation from '../validators/login-register-validator';
import * as publishCarValidation from '../validators/publish-car-validator';

export const useFormValidate = (formValues, formType) => {
    let validators;


    if (formType === 'login-register') {
        validators = loginRegisterValidation;
    } else if (formType === 'publish-car') {
        validators = publishCarValidation;
    } else {
        alert('error')
    }


    const [errors, setErrors] = useState({});

    const validatorsHandler = (fieldName) =>
        () => validators[fieldName](formValues, errors, setErrors, fieldName);


    return {
        validatorsHandler,
        errors
    }


}