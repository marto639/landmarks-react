import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

import * as photoService from '../services/photosService.js';
import { AuthContext } from "../../context/AuthContext.js";

export const Edit = (e) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [editPhoto, setEditPhoto] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        photoService.getOne(id)
            .then(result => {
                setEditPhoto(result);
            });
    }, [])

    const editBtn = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        const imageUrl = formData.get('imageUrl');
        const country = formData.get('country');
        const city = formData.get('city');
        const details = formData.get('details');

        if (imageUrl == '' || country == '' || city == '' || details == '') {
            return alert('All fields must be filled!');
        }

        photoService.editPhoto(id, user.accessToken, imageUrl, country, city, details)
            .then(() => {
                navigate(`/details/${id}`)
            });
    };
    return (
        <form onSubmit={editBtn}>
            <div className="edit-container">
                <input
                    type="text"
                    name="imageUrl"
                    defaultValue={editPhoto.imageUrl}
                    placeholder=" image"
                    className="edit-image"
                />
                <input
                    type="text"
                    name="country"
                    defaultValue={editPhoto.country}
                    placeholder="country"
                    className="edit-country"
                />
                <input
                    type="text"
                    name="city"
                    defaultValue={editPhoto.city}
                    placeholder="city"
                    className="edit-city"
                />
                <input
                    type="text"
                    name="details"
                    defaultValue={editPhoto.details}
                    placeholder=" details"
                    className="edit-details"
                />
                <input
                    type="submit"
                    value="Edit"
                    className="edit-button"
                />
            </div>
        </form>
    );
};