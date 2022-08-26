import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext.js';
import * as authService from '../services/authService.js';

export const Register = () => {
    const navigate = useNavigate();
    const { loginUser } = useContext(AuthContext);

    const registerHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        const username = formData.get('username');
        const password = formData.get('password');
        const rePassword = formData.get('rePassword');

        if (password !== rePassword) {
            return alert('password is not the same as repeat password!');
        }
        if (username == '' || password == '' || rePassword == '') {
            return alert('All fields must be filled');
        }

        authService.register(username, password)
            .then((user) => {
                loginUser(user);
                navigate('/');
            });
    };

    return (
        <div className="register-container">
            <form onSubmit={registerHandler}>
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