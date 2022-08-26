import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext.js";
import { HomeComponent } from '../Home/HomeController/HomeComponent.js';
import * as pictureService from '../services/photosService.js';

export const Create = () => {
    const navigate = useNavigate();
    const [pictures, setPictures] = useState([]);
    const { user } = useContext(AuthContext);

    const createHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        const username = formData.get('user');
        const image = formData.get('imageUrl');
        const contry = formData.get('country');
        const city = formData.get('city');
        const details = formData.get('details');

        if (image == '') {
            return alert('Image field showd be filled!')
        }
        if (contry == '') {
            return alert('contry field showd be filled!')
        }
        if (city == '') {
            return alert('city field showd be filled!')
        }
        if (details == '') {
            return alert('details field showd be filled!')
        }

        pictureService.postPicture(user.accessToken, username, image, contry, city, details)
            .then((picture) => {
                setPictures(picture);
                navigate('/');
            })
    };

    return (
        <>
            <div className="create-container">
                <form onSubmit={createHandler}>
                    <input
                        type="text"
                        name="user"
                        className="create-page-user"
                        placeholder="Username"
                    />
                    <input
                        type="text"
                        name="imageUrl"
                        className="create-page-image"
                        placeholder="Image"
                    />
                    <input
                        type="text"
                        name="country"
                        className="create-page-country"
                        placeholder="Contry"
                    />
                    <input
                        type="text"
                        name="city"
                        className="create-page-city"
                        placeholder="City"
                    />
                    <input
                        type="text"
                        name="details"
                        className="create-page-details"
                        placeholder="Details"
                    />
                    <input
                        type="submit"
                        value="Post picture"
                        className="post-picture"
                    />
                </form>
            </div>
            <img
                src={require("../../images/create-page-images/person-photographer.png")}
                alt="photographer"
                className="photographer-drawing"
            />
            <img
                src={require("../../images/create-page-images/Mountain-picture.png")}
                alt="mountain"
                className="mountain-drawing"
            />
            {pictures.map(x => <HomeComponent key={x._id} photos={x} />)}
        </>

    );
};