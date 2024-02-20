import * as requester from './requester';
const baseUrl = "http://localhost:3030/likes";


export const LikeCar = async (carId, accessToken) => {
    return await requester.post(baseUrl, carId, accessToken);
}

export const unLikeCar = async (likeId, accessToken) => {
    return await requester.del(`${baseUrl}/${likeId}`, undefined, accessToken)
}
