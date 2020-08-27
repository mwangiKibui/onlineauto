import React from 'react';

//third-party

//components
import Copyright from './Copyright';
import Links from './Links';


const Footer = () => {
    return (
        <footer className="footer">
            
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 text-center">
                        <Copyright />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 text-center">
                        <Links />
                    </div>
                </div>
            </div>
            
        </footer>
    )
};

export default Footer;