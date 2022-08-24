import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from "../../context/AuthContext.js";
import * as authService from '../services/authService.js';

export const Login = () => {
    const { loginUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        const username = formData.get('username');
        const password = formData.get('password');

        if (username == '' || password == '') {
            return alert('All fields must be filled!');
        }

        authService.login(username, password)
            .then(user => {
                if (user.accessToken) {
                    loginUser(user);
                    navigate('/');
                } else {
                    return alert('Login or password don\'t match!')
                }
            })
    };

    return (
        <div className="login-container">
            <form onSubmit={loginHandler}>
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