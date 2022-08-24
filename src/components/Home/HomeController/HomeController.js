export const HomeController = ({
    photos
}) => {
    return (
        <div className="home-container">
            <img
                className="container-img"
                src={photos.imageUrl}
                alt="Beautiful image"
            />
            <h3 className="place-of-beauty">Country: {photos.country}</h3>
            <h3 className="city-of-beauty">City: {photos.city}</h3>
            <h3 className="picture-by">Posted by: {photos.user}</h3>
            <button className="details-button">Details</button>
        </div>
    );
};  