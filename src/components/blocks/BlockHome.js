import React from 'react';

//third-party
import {Link} from 'react-router-dom';
//components

const BlockHome = () => {


    return (
        <section className="block-home" style={{backgroundImage:'url(/images/cover.webp)'}}>
            <div className="block-home-overlay">

                <div className="block-home-content">

                    <div className="container">

                    <h4 className="block-home-content-heading">
                        Find the right car for you,
                        <br />
                        With ease.
                    </h4>

                    <Link to="/showroom" className="btn btn-success">
                        Explore our showroom
                    </Link>
                    </div>

                </div>

            </div>
        </section>
    )
};

export default BlockHome;