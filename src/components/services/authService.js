const url = 'http://localhost:3030/users';

export const login = (username, password) => {
    return fetch(`${url}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(res => res.json());
};

export const register = (username, password) => {
    return fetch(`${url}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(res => res.json());
};

export const logout = (accessToken) => {
    return fetch(`${url}/logout`, {
        headers: {
            'X-Authorization': accessToken
        }
    })
};