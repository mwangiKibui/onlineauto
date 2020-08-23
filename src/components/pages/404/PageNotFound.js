import React from 'react';

//third-party
import {Link} from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">
                        <h5>Sorry, no such page found</h5>
                        <Link to="/" className="btn btn-success">
                            Go to Homepage
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PageNotFound;