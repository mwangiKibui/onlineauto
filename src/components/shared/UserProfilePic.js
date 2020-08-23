import React,{useState} from 'react';

//third-party
import {useSelector,useDispatch} from 'react-redux';
import {CameraAlt} from '@material-ui/icons';
import {ScaleLoader} from 'react-spinners';
import {Alert} from '@material-ui/lab';
//components
import {updateProfilePic} from '../../store/users';


const UserProfilePic = () => {

    const {user,loading} = useSelector(state => state.users);
    const [loaded,setLoaded] = useState(false);
    const [profile,setProfile] = useState('');
    const [error,setError] = useState('');
    const dispatch = useDispatch();

    const uploadPic = e => {
        /** we check the type */
        let profile_pic = e.target.files[0];
        setError('');

        if(!profile_pic['type'].startsWith('image')){
            setError('You must select an image');
            return e.target.value = null;
        };

        /** check the size */
        if(profile_pic['size'] > 5000000){
            setError('File should not exceed 5mb.')
            return e.target.value = null;
        };

        //all clear
        setProfile(URL.createObjectURL(profile_pic));
        let data = new FormData();
        data.append('profile',profile_pic);

        dispatch(updateProfilePic(user['_id'],data));

    }

    return (
        <div className="user-profile-pic-container">

            <div className="user-profile-img-preloader" style={{display:loaded ? 'none' : 'block'}} />
            <img
            src={
                profile ? profile :
                user['profile'] ? user['profile'] : '/images/default.webp'
            }
            onLoad={() => setLoaded(true)}
            style={{display:loaded ? 'block' : 'none'}}
            className="user-profile-img"
            alt=""
            />
            <div className="user-profile-form-container">
                <form className="user-profile-form">
                    {
                        error ? (
                            <div className="form-group">
                                <Alert severity="error">{error}</Alert>
                            </div>
                        ) : null
                    }
                    <div className="form-group text-center">

                        <label htmlFor="profile-img">
                            {
                                loading ? (
                                    <ScaleLoader width={2} height={10} radius={2} margin={2} color="#009933" />
                                ) : (
                                    <CameraAlt className="profile-img-label" />
                                )
                            }                            
                        </label>

                        <input
                        id="profile-img" 
                        type="file"
                        style={{display:'none'}}
                        onChange={uploadPic}
                        />

                    </div>
                </form>
            </div>

        </div>
    );

};

export default UserProfilePic;