const url = 'http://localhost:3030/data/photos';

export const getAll = () => {
    return fetch(url)
        .then(res => res.json());
};

export const postPicture = (accessToken, user, imageUrl, country, city, details) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify({ user, imageUrl, country, city, details })
    })
        .then(res => res.json());
};

export const getOne = (id) => {
    return fetch(`${url}/${id}`)
        .then(res => res.json());
};

export const editPhoto = (id, accessToken, imageUrl, country, city, details) => {
    return fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'Application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify({ imageUrl, country, city, details })
    })
        .then(res => res.json());
};