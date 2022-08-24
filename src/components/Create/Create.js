export const Create = () => {
    return (
        <>
            <div className="create-container">
                <form>
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
        </>

    );
};