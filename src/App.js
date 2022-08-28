import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { Navigation } from './components/Navigation/Navigation.js';
import { Home } from './components/Home/Home.js';
import { Login } from './components/Login/Login.js';
import { Register } from './components/Register/Register.js';
import { Create } from './components/Create/Create.js';
import { Logout } from './components/Logout/Logout.js';
import { Details } from './components/Details/Details.js';
import { Info } from './components/Info/Info.js';
import { Edit } from './components/Edit/Edit.js';

import { AuthContext } from './context/AuthContext.js';

import "./styles/App.css";

function App() {
    const [user, setUser] = useState({});

    const loginUser = (data) => {
        setUser(data);
    }

    const logoutUser = () => {
        setUser({});
    }

    return (
        <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
            <div className="App">
                <Navigation />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/edit/:id" element={<Edit />} />
                    <Route path="/info" element={<Info />} />
                </Routes>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
