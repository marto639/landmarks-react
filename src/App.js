import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { Navigation } from './components/Navigation/Navigation.js';
import { Home } from './components/Home/Home.js';
import { Login } from './components/Login/Login.js';
import { Register } from './components/Register/Register.js';
import { Create } from './components/Create/Create.js';

import { AuthContext } from './context/AuthContext.js';

import "./styles/App.css";

function App() {
    const [user, setUser] = useState({});

    const loginUser = (data) => {
        setUser(data);
    }

    return (
        <AuthContext.Provider value={{ user, loginUser }}>
            <div className="App">
                <Navigation />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/create" element={<Create />} />
                </Routes>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
