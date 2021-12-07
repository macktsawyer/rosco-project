import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Navbars from './Navbars';
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <div style={{overflowX: "hidden" }}>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Navbars" element={<Navbars />} />
            </Routes>
        </div>
    )
}

export default App;