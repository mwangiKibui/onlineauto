import React from 'react';

//third-party
// import {Search} from '@material-ui/icons';
//components

const BlockHome = () => {

    // const [vehicle,setVehicle] = useState();

    return (
        <section className="block-home" style={{backgroundImage:'url(/images/cover.webp)'}}>
            <div className="block-home-overlay">

                <div className="block-home-content">
                    {/* <form className="block-home-content-form">
                        <>
                        <div className="input-group block-home-content-form-input ">
                            <input
                            type="text"
                            className="search-form form-control"
                            name="vehicle"
                            value={vehicle}
                            placeholder="Search for a vehicle"
                            onChange={e => setVehicle(e.target.value)}
                            />
                            <div className="input-group-append">
                                <span className="input-group-text">
                                    <Search className="input-group-icon"/>
                                </span>
                            </div>

                        </div>
                        </>
                    </form> */}
                </div>

            </div>
        </section>
    )
};

export default BlockHome;