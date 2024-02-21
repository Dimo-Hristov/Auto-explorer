import * as requester from "./requester";

const baseUrl = "https://auto-explorer-server.onrender.com/auth";

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

