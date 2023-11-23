import * as requester from './requester';
const baseUrl = "http://localhost:3030/data/likes";


export const LikeCar = async (carId, accessToken) => {
    return await requester.post(baseUrl, carId, accessToken);
}