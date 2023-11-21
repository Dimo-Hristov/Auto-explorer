import * as requester from './requester';

const baseUrl = "http://localhost:3030/data/cars";

export const createCar = async (formValues, accessToken) => {

    const response = await requester.post(baseUrl, formValues, accessToken);
    const resData = response.json();
    return resData
}