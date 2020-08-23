import React,{Component} from 'react';

//third-party
import {connect} from 'react-redux';
import {Alert} from '@material-ui/lab';
import {Redirect,Link} from 'react-router-dom';
//components
import {login} from '../../store/users';

class Login extends Component {
    state = {
        email:'',
        password:'',
        error:'',
        action:'Login',
        redirect:false,
        redirectTo:this.props.redirectTo
    };
    componentDidUpdate(prevProps){
        if(this.props.error !== prevProps.error){
            this.setState({error:this.props.error})
        }
    }
    onChange = e => this.setState({ [e.target.name] : e.target.value});

    validateEmail = email => {
        //eslint-disable-next-line
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    onSubmit = async e => {
        e.preventDefault();
        this.setState({error:''});

        //set up the data.
        let {email,password} = this.state;
        if(!email || !password) return this.setState({error:'All fields are required'});
        if(!this.validateEmail(email)) return this.setState({error:'Enter a valid email'});


        this.setState({action:'Loading'});
        let data = {email,password};
        await this.props.login(data);

        if(this.props.error) return this.setState({action:'Login'});
        return this.setState({email:'',password:'',error:'',redirect:true})

    }

    render(){
        const {error,action,email,password,redirect,redirectTo} = this.state;
        return (
            redirect ? (
                <Redirect to={
                    redirectTo ? redirectTo : '/auth/dashboard'
                } />
            ) : (
            <section className="login-form-container">
                <div className="login-form-container-content">
                <form onSubmit={this.onSubmit}>
                    {
                        error ? (
                            <div className="form-group">
                                <Alert severity="error">{error}</Alert>
                            </div>
                        ) : null
                    }
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        placeholder="Your email address"                        
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                        type="password"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        placeholder="Your password"
                        />
                    </div>
                    <div className="form-group text-center mt-2 mb-2">
                        <input type="submit"
                        className="btn btn-success"
                        value={action}
                        />
                    </div>
                    <div className="form-group auth-links text-center">
                        <p>
                            New to Online auto ? <Link to="/auth/signup">Create account</Link>
                        </p>
                    </div>
                </form>
                </div>
            </section>
            )
        )
    }
};
const mapToProps = state => ({
    error:state.users.error
});
const dispatchToProps = {
    login
};
export default connect(mapToProps,dispatchToProps)(Login);