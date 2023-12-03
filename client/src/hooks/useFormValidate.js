import { useState } from "react";
import * as loginRegisterValidation from '../validators/login-register-validator'

export const useFormValidate = (formValues) => {
    const validators = loginRegisterValidation;

    const [errors, setErrors] = useState({});

    const validatorsHandler = (fieldName) =>
        () => validators[fieldName](formValues, errors, setErrors, fieldName);


    return {
        validatorsHandler,
        errors
    }


}

