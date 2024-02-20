import * as requester from "./requester";

const baseUrl = "http://localhost:3030/auth";

export const register = async (data) => {
    const response = await requester.post(`${baseUrl}/register`, data);
    const resData = await response.json();
    return resData;
};

export const login = async (data) => {
    const response = await requester.post(`${baseUrl}/login`, data);
    const resData = await response.json();
    return resData;
};

export const logout = async (token) =>
    await requester.get(`${baseUrl}/logout`, undefined, token);
