import React from 'react';

//components
import BlockHome from '../blocks/BlockHome';
import Vehicles from '../shared/Vehicles';

const Homepage = () => {
    return (
        <section className="home-page">
            <BlockHome />
            <div className="container">
            <Vehicles />
            </div>
        </section>
    )
};

export default Homepage;