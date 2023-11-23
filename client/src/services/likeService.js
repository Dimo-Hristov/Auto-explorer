import * as requester from './requester';
const baseUrl = "http://localhost:3030/data/likes";


export const LikeCar = async (carId, accessToken) => {
    return await requester.post(baseUrl, carId, accessToken);
}

export const unLikeCar = async (likeId, accessToken) => {
    return await requester.del(`${baseUrl}/${likeId}`, undefined, accessToken)
}

export const getCarLikes = async (carId) => {
    try {
        return await requester.get(`${baseUrl}?where=likedCar%3D%22${carId}%22`);
    } catch (error) {

    }
}