export const HomeComponen = () => {
    return (
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
    );
};  