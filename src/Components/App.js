import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Navbars from './Navbars';
import Buttons from './Buttons';
import Forms from './Forms';
import Documentation from './Documentation';
import About from './About';
import GetInvolved from './GetInvolved';
import FAQ from './FAQ';
import Github from './Github';
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <div style={{overflowX: "hidden" }}>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Navbars" element={<Navbars />} />
                <Route path="/Buttons" element={<Buttons />} />
                <Route path="/Forms" element={<Forms />} />
                <Route path="/Documentation" element={<Documentation />} />
                <Route path="/About" element={<About />} />
                <Route path="/GetInvolved" element={<GetInvolved />} />
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="/Github" element={<Github />} />
            </Routes>
        </div>
    )
}

export default App;