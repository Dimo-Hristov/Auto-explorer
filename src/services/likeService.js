import * as requester from './requester';
const baseUrl = "http://localhost:3030/cars/like";


export const LikeCar = async (carId, accessToken) => {
    return await requester.get(`${baseUrl}/${carId}`, undefined, accessToken);
}

export const unLikeCar = async (likeId, accessToken) => {
    return await requester.del(`${baseUrl}/${likeId}`, undefined, accessToken)
}
