import { createContext, useState } from "react";

export const ErrorContext = createContext();

export const ErrorHandler = ({ children }) => {
    const [errorMessages, setErrorMessages] = useState([]);

    const addErrorMessage = (errorMessage) => {
        setErrorMessages((state) => [...state, errorMessage]);
    };

    const contextValues = {
        addErrorMessage,
        errorMessages,
    };

    return (
        <ErrorContext.Provider value={contextValues}>
            {children}
        </ErrorContext.Provider>
    );
};
