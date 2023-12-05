import { createContext, useState } from "react";

export const ErrorContext = createContext();

export const ErrorHandler = ({ children }) => {
    const [errorMessages, setErrorMessages] = useState([]);

    const addErrorMessage = (errorMessage) => {
        setErrorMessages((state) => [...state, errorMessage]);

        setTimeout(() => {
            removeErrorMessage(errorMessage);
        }, 5000);
    };

    const removeErrorMessage = (errorMessageToRemove) => {
        setErrorMessages((state) =>
            state.filter((errorMessage) => errorMessage !== errorMessageToRemove)
        );
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
