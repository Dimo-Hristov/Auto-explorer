import * as requester from './requester';
const baseUrl = "https://auto-explorer-server.onrender.com/cars/like";


export const LikeCar = async (carId, accessToken) => {
    return await requester.get(`${baseUrl}/${carId}`, undefined, accessToken);
}

export const unLikeCar = async (likeId, accessToken) => {
    return await requester.del(`${baseUrl}/${likeId}`, undefined, accessToken)
}
