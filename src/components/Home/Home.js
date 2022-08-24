export const Home = () => {
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
                <div className="home-container">
                    <img
                        className="container-img"
                        src="https://thumbs.dreamstime.com/b/d-mural-wallpaper-beautiful-view-landscape-background-old-arches-tree-sun-water-birds-flowers-transparent-curtains-166191190.jpg"
                        alt="Beautiful image"
                    />
                    <h3 className="place-of-beauty">Country: USA</h3>
                    <h3 className="city-of-beauty">City: London</h3>
                    <h3 className="picture-by">Picture posted by: User</h3>
                    <button className="details-button">Details</button>
                </div>
                <div className="home-container">
                    <img
                        className="container-img"
                        src="https://images.pexels.com/photos/794494/pexels-photo-794494.jpeg?cs=srgb&dl=pexels-anthony-794494.jpg&fm=jpg"
                        alt="Beautiful image"
                    />
                    <h3 className="place-of-beauty">Country: Turkey</h3>
                    <h3 className="city-of-beauty">City: London</h3>
                    <h3 className="picture-by">Picture posted by: User</h3>
                    <button className="details-button">Details</button>
                </div>
                <div className="home-container">
                    <img
                        className="container-img"
                        src="https://wallpaper.dog/large/20492872.jpg"
                        alt="Beautiful image"
                    />
                    <h3 className="place-of-beauty">Country: Bulgaria</h3>
                    <h3 className="city-of-beauty">City: London</h3>
                    <h3 className="picture-by">Picture posted by: User</h3>
                    <button className="details-button">Details</button>
                </div>
                <div className="home-container">
                    <img
                        className="container-img"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZXforlq8r5qU0cl2R1s08_vOmmNQa5tQ6wg&usqp=CAU"
                        alt="Beautiful image"
                    />
                    <h3 className="place-of-beauty">Country: London</h3>
                    <h3 className="city-of-beauty">City: London</h3>
                    <h3 className="picture-by">Picture posted by: User</h3>
                    <button className="details-button">Details</button>
                </div>
                <div className="home-container">
                    <img
                        className="container-img"
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/great-ocean-road-174028267-1494616481.jpg"
                        alt="Beautiful image"
                    />
                    <h3 className="place-of-beauty">Country: Australia</h3>
                    <h3 className="city-of-beauty">City: Great Ocean Road</h3>
                    <h3 className="picture-by">Picture posted by: User</h3>
                    <button className="details-button">Details</button>
                </div>
                <div className="home-container">
                    <img
                        className="container-img"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHmgJNMykO3HeUYNUiPOryJxu4oDaGgiPmQ&usqp=CAU"
                        alt="Beautiful image"
                    />
                    <h3 className="place-of-beauty">Country: Japan</h3>
                    <h3 className="city-of-beauty">City: Mount Fuji</h3>
                    <h3 className="picture-by">Picture posted by: User</h3>
                    <button className="details-button">Details</button>
                </div>
            </div>
        </>
    );
};