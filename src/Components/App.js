import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Navbars from './Navbars';
import Buttons from './Buttons';
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <div style={{overflowX: "hidden" }}>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Navbars" element={<Navbars />} />
                <Route path="/Buttons" element={<Buttons />} />
            </Routes>
        </div>
    )
}

export default App;