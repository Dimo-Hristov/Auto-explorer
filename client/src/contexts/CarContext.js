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

    const { accessToken, userId } = useContext(AuthContext)

    const [cars, setCars] = useState([]);


    useEffect(() => {
        const fetchData = async () => {

            const fetchedCars = await carService.getAllCars();

            const carsWithLikes = await Promise.all(
                fetchedCars?.map(async (car) => {
                    const response = await likeService.getCarLikes(car._id, accessToken);
                    let likes = []
                    if (response) {
                        likes = await response.json();
                        return { ...car, likes };
                    }
                    return { ...car, likes: [] }
                })
            );
            setCars(carsWithLikes);

        };

        fetchData();
    }, [accessToken]);


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

            setCars(state => state.map(x => x._id === updatedCar._id ? x = { ...updatedCar, likes: x.likes } : x));
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
        try {
            const response = await likeService.LikeCar(carId, accessToken);
            const like = await response.json();
            console.log(like);
            setCars(state => state.map(x =>
                x._id === like.likedCar
                    ? { ...x, likes: [...x.likes, like] }
                    : x
            ))
        } catch (error) {
            alert(error.message)
        }
    }

    const onUnlikeSubmit = async (carId) => {
        const currentCarIndex = cars.findIndex(x => x._id === carId);
        const currentCar = cars[currentCarIndex];
        const myLikeIndex = currentCar.likes.findIndex(x => x._ownerId === userId);

        if (myLikeIndex !== -1) {
            const updatedLikes = [...currentCar.likes];
            updatedLikes.splice(myLikeIndex, 1);

            try {
                await likeService.unLikeCar(currentCar.likes[myLikeIndex]._id, accessToken);

                setCars(state => {
                    const updatedCars = [...state];
                    updatedCars[currentCarIndex] = { ...currentCar, likes: updatedLikes };
                    return updatedCars;
                });
            } catch (error) {
                alert(error.message);
            }
        }
    };



    const contextValues = {
        onCreateCarSubmit,
        onEditCarSubmit,
        onDeleteCarSubmit,
        onLikeSubmit,
        onUnlikeSubmit,
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