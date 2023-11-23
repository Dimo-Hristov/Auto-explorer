import { createContext, useState, useEffect } from "react";
import * as carService from '../services/carService';
import * as likeService from '../services/likeService';
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
                setCars(cars)
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

            setCars(state => state.map(x => x._id === updatedCar._id ? x = updatedCar : x));
            navigate(`/catalog/${carId}`)
        } catch (error) {
            alert(error.message)
        }
    }

    const onDeleteCarSubmit = async (carId) => {
        try {
            await carService.deleteCar(carId, accessToken);
            setCars(state => state.filter(x => x._id !== carId))
            navigate('/catalog')
        } catch (error) {

        }
    }

    const onLikeSubmit = async (carId) => {
        const response = await likeService.LikeCar(carId, accessToken);
        const like = await response.json();
        console.log(like);
        setCars(state => state.map(x =>
            x._id === like.likedCar
                ? { ...x, likes: x.likes++ }
                : x
        ))
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