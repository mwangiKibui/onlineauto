import React from 'react';

//third-party
//components
import Vehicles from '../shared/Vehicles';

const Showroom = () => {
    return (
        <section className="showroom mt-10 mb-10">
            <div className="container">
                <Vehicles />
            </div>
        </section>
    )
};

export default Showroom;