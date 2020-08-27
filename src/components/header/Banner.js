import React from 'react';

//third-party
import {Mail,Call} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Banner = () => {
    const {token} = useSelector(state => state.users)
    return (
        <section className="banner-section">
            <div className="d-none d-sm-block d-md-block">
                <div className="row">

                    <div className="col-sm-3 col-md-3">

                        <img 
                        src="/images/logo.jpg"
                        className="banner-section-img"
                        alt=""
                        />

                    </div>

                    <div className="col-sm-3 col-md-3 banner-section-card">

                        <div className='media'>
                            <div className="banner-section-icon-container">
                            <Mail className="banner-section-icon" />
                            </div>
                            <div className="media-body">
                                <h5 className="banner-section-heading">For support mail us:</h5>
                                <p className="banner-section-text">onlineauto@gmail.com</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-sm-3 col-md-3 banner-section-card">

                        <div className='media'>

                            <div className="banner-section-icon-container">
                            <Call className="banner-section-icon" />
                            </div>

                            <div className="media-body">
                                <h5 className="banner-section-heading">Service Helpline call us:</h5>
                                <p className="banner-section-text">+254 701 405 651</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-sm-3 col-md-3 banner-section-card">

                        <div className="banner-section-link">

                            {/** we shall make this dynamic later */}
                            {
                                !token ? (
                                    <Link to="/auth/login" className="btn btn-danger">
                                        Login / Register
                                    </Link>
                                ) : (
                                    <Link to="/auth/logout" className="btn btn-danger">
                                        Logout
                                    </Link>
                                )
                            }
                        </div>

                    </div>


                </div>
            </div>
        </section>
    )
};

export default Banner;