import React,{useState,useEffect} from 'react';

//third-party
import {connect,useDispatch} from 'react-redux';
import {Alert} from '@material-ui/lab';
//components
import {updateProfileDetails} from '../../store/users';

const UserProfileDetails = ({user}) => {


    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [error,setError] = useState('');
    const [action,setAction] = useState('update details');
    const dispatch = useDispatch();

    useEffect(() => {
        setEmail(user['email']);
        setName(user['name']);
        setPhone(user['phone'] ? (
            user['phone'].startsWith('+254') ? user['phone'].slice(3) : user['phone']
        ) : '')
    },[user]);

    

    const validateEmail = email => {
        //eslint-disable-next-line
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    const onSubmit = e => {
        e.preventDefault();
        setError('');

        if(!email || !name || !phone ) return setError('All fields are required');
        if(!validateEmail(email)) return setError('Your email is not valid');
        if(phone.length !== 9 ) return setError('You must use the right format for phone.');

        setAction('Loading');
        let data = {email,name,phone};
        dispatch(updateProfileDetails(user['_id'],data));
        return setAction('update details');
    }
    return (
        <section className="update-details-form-container">
            <div className="update-details-form-content">
                <form onSubmit={onSubmit}>
                    {
                        error ? (
                            <div className="form-group">
                                <Alert severity="error">{error}</Alert>
                            </div>
                        ) : null
                    }
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={name}
                        placeholder="Your name"
                        onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={email}
                        placeholder="Your email"
                        onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <>
                        <label htmlFor="phone">Phone</label>
                        <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">254</span>
                        </div>
                        <input
                        type="number"
                        className="form-control"
                        name="phone"
                        value={phone}
                        placeholder="7xxxxxxxx"
                        onChange={e => setPhone(e.target.value)}
                        />
                        </div>
                    </>
                    <div className="form-group text-center mt-2 mb-2">
                        <input 
                            type="submit"
                            className="btn btn-success"
                            value={action}
                        />
                    </div>
                </form>
            </div>
        </section>
    )
};
const mapToProps = state => ({
    user:state.users.user
});
export default connect(mapToProps,null)(UserProfileDetails);