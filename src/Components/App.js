import React from 'react';
import Nav from './Nav';
import Home from './Home';

const App = () => {
    return (
        <div style={{overflowX: "hidden" }}>
            <Nav />
            <Home />
        </div>
    )
}

export default App;