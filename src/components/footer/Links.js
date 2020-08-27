import React from 'react';

//third-party
import {Facebook,Instagram,Twitter,YouTube} from '@material-ui/icons';

const Links = () => {
    return (
        <div className="footer-links-container">

            <ul className="footer-links-ul">

                <li className="footer-links-item">
                    <a href="www.facebook.com">
                        <Facebook className="footer-links-icon" />
                    </a>
                </li>

                <li className="footer-links-item">
                    <a href="www.instagram.com">
                        <Instagram className="footer-links-icon" />
                    </a>
                </li>

                <li className="footer-links-item">
                    <a href="www.twitter.com">
                        <Twitter className="footer-links-icon" />
                    </a>
                </li>

                <li className="footer-links-item">
                    <a href="www.youtube.com">
                        <YouTube className="footer-links-icon" />
                    </a>
                </li>

            </ul>

            </div>
    )
};

export default Links;