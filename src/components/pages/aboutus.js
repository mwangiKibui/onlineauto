import React from 'react';

const AboutUs = () => {
    return (
        <section className="aboutus mt-10 mb-10">
            <div className="container">
                <div className="row">

                    <div className="col-12 col-sm-6 col-md-6">
                        <img src="/images/about.png" className="about-section-img" alt="" />
                    </div>

                    <div className="col-12 col-sm-6 col-md-6">
                        <div className="about-section-content">


                            <h4 className="about-section-content-heading">
                                About us
                            </h4>
                            <p className="about-section-text">
                                We are an Online vehicle selling startup specializing in Toyota,
                                Audi, Mazda, Range Rover and Bmw.
                                <br />
                                Always keep in touch with us on our social media platforms for crazy deals and 
                                new arrivals.
                                <br />
                                Its time we drive.
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
};

export default AboutUs;