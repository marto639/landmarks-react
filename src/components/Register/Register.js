export const Register = () => {
    return (
        <div className="register-container">
            <form>
                <input
                    type="text"
                    name="username"
                    className="register-username"
                    placeholder="Username"
                />
                <input
                    type="password"
                    name="password"
                    className="register-password"
                    placeholder="Password"
                />
                <input
                    type="password"
                    name="rePassword"
                    className="register-rePassword"
                    placeholder="Repeat Password"
                />
                <input
                    type="submit"
                    value="Register"
                    className="register-submit-button"
                />
            </form>
        </div>

    );
};