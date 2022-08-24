const url = 'http://localhost:3030/data/photos';

export const getAll = () => {
    return fetch(url)
        .then(res => res.json());
};