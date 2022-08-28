import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import * as photoService from '../services/photosService.js';
import { AuthContext } from '../../context/AuthContext.js';

export const Details = () => {
    const { id } = useParams();
    const [photo, setPhoto] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const deletePhoto = (e) => {
        e.preventDefault();

        photoService.deletePhoto(id, user.accessToken)
            .then(() => {
                navigate('/');
            })
    };

    useEffect(() => {
        photoService.getOne(id)
            .then(result => {
                setPhoto(result);
            })
    }, [])

    return (
        <>
            <div>
                <img
                    src={photo.imageUrl}
                    alt="Beautiful image"
                    className="details-image"
                />
                {user._id == photo._ownerId
                    ?
                    <>
                        <Link className='edit' to={`/edit/${id}`}>Edit</Link>
                        <Link className='delete' to="/" onClick={deletePhoto}>Delete</Link>
                    </>
                    : ''
                }


                <h3 className="country-name">
                    Country: {photo.country}
                </h3>
                <h3 className="city-name">City: {photo.city}</h3>
                <p className="detail-details">
                    Details: {photo.details}
                </p>
            </div>
        </>
    );
};