import { createContext, useState } from "react";

export const ErrorContext = createContext();

export const ErrorHandler = ({ children }) => {
    const [errors, setErrors] = useState([]);

    const addErrorMessage = (errorMessage) => {
        setErrors((state) => [...state, errorMessage]);
    };

    const contextValues = {
        addErrorMessage,
        errors,
    };

    return (
        <ErrorContext.Provider value={contextValues}>
            {children}
        </ErrorContext.Provider>
    );
};
