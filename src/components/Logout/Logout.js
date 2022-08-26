import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext.js";
import * as authService from '../services/authService.js';


export const Logout = () => {
    const navigate = useNavigate();
    const { user, logoutUser } = useContext(AuthContext);

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logoutUser();
                navigate('/');
            });
    }, []);
};