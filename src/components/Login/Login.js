export const Login = () => {
    return (
        <div className="login-container">
            <form>
                <input
                    type="text"
                    name="username"
                    className="username login-inputs"
                    placeholder="Username"
                />
                <input
                    type="password"
                    name="password"
                    className="password login-inputs"
                    placeholder="Password"
                />
                <img
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/great-ocean-road-174028267-1494616481.jpg"
                    alt="beautiful-picture"
                    className="first-login-beautiful-picture"
                />
                <img
                    src="https://globalgrasshopper.com/wp-content/uploads/2012/01/10-of-the-most-beautiful-places-to-visit-in-Laos.jpg"
                    alt="beautiful-picture"
                    className="second-login-beautiful-pic"
                />
                <img
                    src="https://i.ytimg.com/vi/olboi3ttUi8/maxresdefault.jpg"
                    alt="beautiful-picture"
                    className="third-login-beautiful-pic"
                />
                <input type="submit" value="Login" className="login-submit-button" />
            </form>
        </div>
    );
};