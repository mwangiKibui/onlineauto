import React,{Component} from 'react';

//third-party
import {connect} from 'react-redux';
import {Alert} from '@material-ui/lab';
import {Link} from 'react-router-dom';
//components
import {signup} from '../../store/users';

class Signup extends Component {

    state = {
        name:'',
        email:'',
        password:'',
        phone:'',
        action:'Create account',
        error:'',
        message:''
    };
    componentDidUpdate(prevProps){
        if(this.props.error !== prevProps.error){
            this.setState({error:this.props.error});
        };
        if(this.props.message !== prevProps.message){
            this.setState({message:this.props.message})
        };
    }
    onChange = e => this.setState({[e.target.name] : e.target.value});

    validateEmail = email => {
        //eslint-disable-next-line
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);        
    };

    onSubmit = async e => {
        e.preventDefault();
        this.setState({error:'',message:''});

        let {name,email,password,phone} = this.state;
        if(!name || !email || !password || !phone) return this.setState({error:'All fields are required'});
        if(!this.validateEmail(email)) return this.setState({error:'Enter a valid email address'});
        if(password.length < 6) return this.setState({error:'Minimum six characters for password'});
        if(phone.length !== 9) return this.setState({error:'Use the right format for phone number'});

        this.setState({action:'Loading'});
        let data = {name,email,password,phone};
        await this.props.signup(data);

        if(this.props.error) return this.setState({action:'Create account'});
        return this.setState({name:'',email:'',password:'',phone:'',action:'Created',message:this.props.message});
        

    }

    render(){
        const {name,email,password,phone,action,error,message} = this.state;
        return (
            <section className="signup-form-container">
                <div className="signup-form-container-content">
                    <form onSubmit={this.onSubmit}>
                        {
                            error ? (
                                <div className="form-group">
                                    <Alert severity="error">{error}</Alert>
                                </div>
                            ) : null
                        }
                        {
                            message ? (
                                <div className="form-group">
                                    <Alert severity="success">{message}</Alert>
                                </div>
                            ) : null
                        }

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                            type="text"
                            className="form-control"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                            placeholder="Your name e.g John doe"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                            type="email"
                            className="form-control"
                            name="email"
                            onChange={this.onChange}
                            value={email}
                            placeholder="Your email address"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={this.onChange}
                            value={password}
                            placeholder="Your account password"
                            />
                        </div>
                        <>
                        <label htmlFor="phone">Phone number</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">254</span>
                            </div>
                            <input
                            type="number"
                            className="form-control"
                            name="phone"
                            onChange={this.onChange}
                            value={phone}
                            placeholder="7xxxxxxxx"
                            />
                        </div>
                        </>
                        <div className="form-group mb-2 mt-2 text-center">
                            <input
                            type="submit"
                            className="btn btn-success"
                            value={action}
                            />
                        </div>
                        <div className="form-group auth-links mt-2 mb-2 text-center">
                            <p>Already have an account? <Link to="/auth/login">Login here</Link></p>
                        </div>

                    </form>
                </div>
            </section>
        )
    }
};
const mapToProps = state => ({
    error:state.users.error,
    message:state.users.message
});
const dispatchToProps = {
    signup
};
export default connect(mapToProps,dispatchToProps)(Signup);