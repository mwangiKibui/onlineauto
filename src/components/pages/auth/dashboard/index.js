import React,{useState,useEffect} from 'react';

//third-party
import {Redirect,Link,Switch,Route} from 'react-router-dom';
import {ClipLoader} from 'react-spinners';
import {useSelector,useDispatch} from 'react-redux';
import classNames from 'classnames';
//components
import {decode} from '../../../../store/users';
import Profile from './Profile';
import Orders from './Orders';

const Dashboard = (props) => {

    const {token} = useSelector(state => state.users);
    const [redirect,setRedirect] = useState(false);
    const [loading,setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {

        //check if we got token
        if(!token) {
            setLoading(false)
            return setRedirect(true);
        }
        //if we got token we can decode it
        dispatch(decode(token));
        return setLoading(false)

    },[dispatch,token]);

    const links = [
        {title:'Profile',url:`${props.match.path}/profile`},
        {title:'Orders',url:`${props.match.path}/orders`}
    ].map((link,index) => (
        <li className={
            classNames('dashboard-profile-link',{
                'dashboard-profile-link-active':link.url === props.location.pathname
            })
        }>
            <Link to={link.url} key={index}>
                {link['title']}
            </Link>
        </li>
    ));

    return (
        <section className="user-dashboard">
            <div className="container">
                <div className="row">
                    {
                        loading ? (
                            <div className="col-12 col-sm-12 col-md-12 text-center">
                                <ClipLoader size={35} color="#009933" />
                            </div>
                        ) : (
                            redirect ? (
                                <Redirect to="/auth/login" />
                            ) : (
                                <>
                                <div className="col-sm-4 col-md-4 col-12">
                                    <ul className="dashboard-profile-links-ul">
                                        {links}
                                    </ul>
                                </div>
                                <div className="col-sm-8 col-md-8 col-12">
                                <Switch>
                                    <Redirect exact from={props.match.path} to={`${props.match.path}/profile`} />
                                    <Route exact path={`${props.match.path}/profile`} component={Profile} />
                                    <Route exact path={`${props.match.path}/orders`} component={Orders} />
                                </Switch>
                                </div>
                                </>
                            )
                        )
                    }
                </div>
            </div>
        </section>
    )
};

export default Dashboard;