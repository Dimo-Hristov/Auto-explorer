import { createContext, useState, useEffect } from "react";
import * as carService from '../services/carService';
import * as likeService from '../services/likeService';
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { ErrorContext } from "./ErrorContext";


export const CarContext = createContext();

export const CarProvider = ({
    children
}) => {
    const navigate = useNavigate();

    const { accessToken } = useContext(AuthContext)
    const [cars, setCars] = useState([]);
    const { addErrorMessage } = useContext(ErrorContext)


    useEffect(() => {
        const fetchData = async () => {
            try {
                let fetchedCars = await carService.getAllCars();

                setCars(fetchedCars);
            } catch (error) {
                addErrorMessage(error.message)
            }


        };

        fetchData();
    }, [accessToken, addErrorMessage]);


    const onCreateCarSubmit = async (formValues) => {

        try {
            const car = await carService.createCar(formValues, accessToken);

            setCars(state => [...state, car]);
            navigate(`/catalog/${car._id}`);

        } catch (error) {
            addErrorMessage(error.message)
        }
    }

    const onEditCarSubmit = async (formValues, carId) => {
        try {

            const updatedCar = await carService.editCar(formValues, carId, accessToken);

            setCars(state => state.map(x => x._id === updatedCar._id ? x = { ...updatedCar, likes: x.likes } : x));
            navigate(`/catalog/${carId}`)
        } catch (error) {
            addErrorMessage(error.message)
        }
    }

    const onDeleteCarSubmit = async (carId) => {
        try {
            await carService.deleteCar(carId, accessToken);
            setCars(state => state.filter(x => x._id !== carId))
            navigate('/catalog')
        } catch (error) {
            addErrorMessage(error.message)
        }
    }

    const onLikeSubmit = async (carId) => {
        try {
            const response = await likeService.LikeCar(carId, accessToken);
            console.log(response);
            const like = await response.json();

            setCars(state => state.map(x =>
                x._id === like.likedCar
                    ? { ...x, likes: [...x.likes, like] }
                    : x
            ))
        } catch (error) {
            addErrorMessage(error.err)
        }
    }



    const contextValues = {
        onCreateCarSubmit,
        onEditCarSubmit,
        onDeleteCarSubmit,
        onLikeSubmit,
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