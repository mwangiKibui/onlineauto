import React from 'react';

//components
import UserProfilePic from '../../../shared/UserProfilePic';
import UserProfileDetails from '../../../shared/UserProfileDetails';

const Profile = () => {
    return (
        <section className="user-profile-dashboard">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-6">
                    <UserProfilePic />
                </div>
                <div className="col-12 col-sm-6 col-md-6">
                    <UserProfileDetails />
                </div>
            </div>
        </section>
    )
};

export default Profile;