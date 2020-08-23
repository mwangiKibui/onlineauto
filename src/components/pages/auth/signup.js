import React from 'react';

//components
import SignupComponent from '../../shared/Signup';

const Signup = () => {
    return (
        <section className="signup-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">
                        <SignupComponent />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Signup;