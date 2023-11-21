import { createContext, useState } from "react";

export const CarContext = createContext();

export const CarProvider = ({
    children
}) => {

    const [cars, setCars] = useState({});

    const onCreateCarSubmit = (formValues) => {
        console.log(formValues);
    }


    const contextValues = {
        onCreateCarSubmit,
    }

    return (
        <>
            <CarContext.Provider value={contextValues}>
                {children}
            </CarContext.Provider>
        </>
    )

}