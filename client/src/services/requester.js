const requester = async (method, url, data, token) => {
    const options = {
        method,
        headers: {
            'content-type': 'application/json',
        }
    }

    if (token) {
        options.headers['X-Authorization'] = token;
    }

    if (data) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    return response;


}

export const get = requester.bind(null, 'GET')
export const post = requester.bind(null, 'POST')
export const put = requester.bind(null, 'PUT')
export const patch = requester.bind(null, 'PATCH')
export const del = requester.bind(null, 'DELETE')