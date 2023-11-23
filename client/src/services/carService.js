import * as requester from './requester';

const baseUrl = "http://localhost:3030/data/cars";

export const createCar = async (formValues, accessToken) => {

    const response = await requester.post(baseUrl, formValues, accessToken);
    const resData = response.json();
    return resData
}

export const getAllCars = async () => {
    const response = await requester.get(baseUrl);

    const resData = response.json();
    return resData
}

export const editCar = async (formValues, carId, accessToken) => {
    const response = await requester.put(`${baseUrl}/${carId}`, formValues, accessToken);
    const resData = response.json();
    return resData;
}

export const deleteCar = async (carId, accessToken) => {
    try {
        return await requester.del(`${baseUrl}/${carId}`, undefined, accessToken)

    } catch (error) {
        alert(error.message)
    }

}