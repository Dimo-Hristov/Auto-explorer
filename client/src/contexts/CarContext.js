import { createContext, useState, useEffect } from "react";
import * as carService from '../services/carService';
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";


export const CarContext = createContext();

export const CarProvider = ({
    children
}) => {
    const navigate = useNavigate();

    const { accessToken } = useContext(AuthContext)

    const [cars, setCars] = useState([]);


    useEffect(() => {
        carService.getAllCars()
            .then(cars => {
                if (!cars.message === 'Resource not found') {
                    setCars(cars)
                }
            })
            .catch(err => alert(err.message))
    }, [])

    const onCreateCarSubmit = async (formValues) => {

        try {
            const car = await carService.createCar(formValues, accessToken);

            setCars(state => [...state, car]);
            navigate(`/catalog/${car._id}`);

        } catch (error) {
            alert(error.message)
        }
    }

    const onEditCarSubmit = async (formValues, carId) => {
        try {

            const updatedCar = await carService.editCar(formValues, carId, accessToken);

            setCars(state => state = state.map(x => x._id === updatedCar._id ? x = updatedCar : x));
            navigate(`/catalog/${carId}`)
        } catch (error) {
            alert(error.message)
        }
    }


    const contextValues = {
        onCreateCarSubmit,
        onEditCarSubmit,
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