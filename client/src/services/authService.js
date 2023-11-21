const baseUrl = 'http://localhost:3030/users'

export const register = async (data) => {
    const request = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const response = await request.json();
    return response;
};

export const login = async (data) => {
    const request = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    const response = await request.json();
    return response
}
