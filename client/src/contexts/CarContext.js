import { createContext, useState } from "react";
import * as carService from '../services/carService';
import { useContext } from "react";
import { AuthContext } from "./AuthContext";


export const CarContext = createContext();

export const CarProvider = ({
    children
}) => {

    const { accessToken } = useContext(AuthContext)

    const [cars, setCars] = useState({});

    const onCreateCarSubmit = async (formValues) => {

        try {
            const car = await carService.createCar(formValues, accessToken);
            setCars(state => ([...state, car]));
        } catch (error) {
            alert(error.message)
        }
    }


    const contextValues = {
        onCreateCarSubmit,
        cars
    }

    return (
        <>
            <CarContext.Provider value={contextValues}>
                {children}
            </CarContext.Provider>
        </>
    )

}