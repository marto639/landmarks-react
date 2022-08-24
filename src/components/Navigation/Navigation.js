import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext.js';

export const Navigation = () => {
    const { user } = useContext(AuthContext);

    useEffect(() => {

    }, []);

    const visualChange = (e) => {
        if (e.target == 'visual-change') {
            e.target.classList.add('visual-change');
        } else {
            e.target.classList.remove('visual-change');
        }
    };

    return (
        <div className="navigation-box">
            <Link className="navigation-links home-navigation" to="/" onClick={visualChange}>Home</Link>
            {user.accessToken
                ?
                <>
                    <Link className="navigation-links create-navigation" to="/create">Create</Link>
                    <Link className="navigation-links profile-navigation" to="/profile">Profile</Link>
                    <Link className="navigation-links logout-navigation" to="/logout">Logout</Link>
                </>
                :
                <>
                    <Link className="navigation-links login-navigation" to="/login">Login</Link>
                    <Link className="navigation-links register-navigation" to="/register">Register</Link>
                    <Link className="navigation-links info-navigation" to="/info">Info</Link>
                </>
            }
        </div>
    );
};