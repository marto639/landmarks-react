import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <div className="navigation-box">
            <Link className="navigation-links home-navigation" to="/">Home</Link>
            <Link className="navigation-links login-navigation" to="/login">Login</Link>
            <Link className="navigation-links register-navigation" to="/register">Register</Link>
            <Link className="navigation-links create-navigation" to="/create">Create</Link>
        </div>
    );
};