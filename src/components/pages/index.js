import React from 'react';

//components
import BlockHome from '../blocks/BlockHome';
import Vehicles from '../shared/Vehicles';
import BlockHeader from '../shared/Block-header';
import Counter from '../shared/Counter';

const Homepage = () => {
    return (
        <section className="home-page">
            <BlockHome />
            <div className="container">
            <BlockHeader title="Find the best car for you" />
            <Vehicles home={true} />
            </div>
            <Counter />            
        </section>
    )
};

export default Homepage;