import { useEffect, useState } from 'react';

import { HomeComponent } from './HomeController/HomeComponent.js';

import * as photosService from '../services/photosService';

export const Home = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        photosService.getAll()
            .then(result => {
                setPhotos(result);
            });
    }, []);

    return (
        <>
            <div>
                <img
                    className="starter-image"
                    src={require("../../images/home-images/beautfil-home-picture.jpg")}
                    alt="beaufitul home image"
                />
            </div>

            <div>
                {photos.map(x => <HomeComponent key={x._id} photos={x} />)}
            </div>
        </>
    );
};