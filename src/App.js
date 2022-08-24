import { Routes, Route } from 'react-router-dom';

import { Navigation } from './components/Navigation/Navigation.js';
import { Home } from './components/Home/Home.js';
import { Login } from './components/Login/Login.js';

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
