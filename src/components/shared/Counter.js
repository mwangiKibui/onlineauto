import React from 'react';

//third-party
import {AiFillCalendar,AiFillCar} from 'react-icons/ai';
import {BsFillPersonFill} from 'react-icons/bs';

const Counter = () => {
    return (
        <section className="counter" style={{backgroundImage:`url('/images/counter.jpg')`}}>
            <div className="counter-overlay">
                <div className="counter-overlay-content">
                    <div className="container">
                        <div className="row">

                            <div className="col-12 col-sm-3 col-md-3">
                                <div className="counter-card">
                                    <div className="counter-card-content">
                                        <AiFillCalendar className="counter-card-icon" />
                                        <h4 className="counter-card-heading">
                                            40+
                                        </h4>
                                        <p className="counter-card-text">
                                            Buy a vehicle
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-3 col-md-3">

                                <div className="counter-card">
                                    <div className="counter-card-content">
                                        <AiFillCar className="counter-card-icon" />
                                        <h4 className="counter-card-heading">
                                            200+
                                        </h4>
                                        <p className="counter-card-text">
                                            New cars
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div className="col-12 col-sm-3 col-md-3">
                                <div className="counter-card">
                                    <div className="counter-card-content">
                                        <AiFillCar className="counter-card-icon" />
                                        <h4 className="counter-card-heading">
                                            1000+
                                        </h4>
                                        <p className="counter-card-text">
                                            Used cars
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-3 col-md-3">

                                <div className="counter-card">
                                    <div className="counter-card-content">
                                        <BsFillPersonFill className="counter-card-icon" />
                                        <h4 className="counter-card-heading">
                                            600+
                                        </h4>
                                        <p className="counter-card-text">
                                            Satisfied customers
                                        </p>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Counter;