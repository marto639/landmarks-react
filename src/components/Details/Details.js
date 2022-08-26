import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as photoService from '../services/photosService.js';

export const Details = () => {
    const { id } = useParams();
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        photoService.getOne(id)
            .then(result => {
                setPhoto(result);
            })
    }, [])

    return (
        <div>
            <img
                src={photo.imageUrl}
                alt="Beautiful image"
                className="details-image"
            />
            <h3 className="country-name">
                Country: {photo.country}
            </h3>
            <h3 className="city-name">City: {photo.city}</h3>
            <p className="detail-details">
                Details: {photo.details}
            </p>
        </div>

    );
};