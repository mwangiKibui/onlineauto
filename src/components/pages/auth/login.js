import React,{useState} from 'react';

//components
import LoginComponent from '../../shared/Login';

const Login = (props) => {

    const [redirectTo] = useState(props.location.state ? props.location.state.url : '');

    return (
        <section className="section-login">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">
                        <LoginComponent redirectTo={redirectTo}/>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Login;