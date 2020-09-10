import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//third-party
import scriptLoader from 'react-async-script-loader';
import {ScaleLoader} from 'react-spinners';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
//components
import {decode,addOrder} from '../../store/users';

const client = {
    sandbox:'AeLhmV_i7tQs1bkXKhbGQ42oJMpZnEzP_AH9RhMMFmj2NYCfTbOriFjttjxXgwspSlNTkfm9v3JpDmwl'
};

const client_ID = client.sandbox;
let PaypalButton = null;

class PayPalButton extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            showButtons:false,
            loading:true,
            paid:false,
            redirect:false,
            orders_redirect:false
        };

        window.React = React;
        window.ReactDOM = ReactDOM;
    };
    componentDidMount(){
        const {isScriptLoaded,isScriptLoadSucceed} = this.props;
        if(isScriptLoaded && isScriptLoadSucceed){
            PaypalButton = window.paypal.Buttons.driver("react",{React,ReactDOM});
            this.setState({loading:false,showButtons:true})
        }
    };
    componentWillReceiveProps(nextProps){
        const {isScriptLoaded,isScriptLoadSucceed} = nextProps;
        const scriptJustLoaded = !this.state.showButtons && !this.props.isScriptLoaded && isScriptLoaded;

        if(scriptJustLoaded){
            if(isScriptLoadSucceed){
                PaypalButton = window.paypal.Buttons.driver("react",{
                    React,
                    ReactDOM
                });
                this.setState({loading:false,showButtons:true});
            }
        };

    };

    createOrder = async (data, actions) => {

        //check if we got no token
        if(!this.props.token) return this.setState({redirect:true});
        //check if we got token and no user
        if(this.props.token && Object.keys(this.props.user).length === 0){

            await this.props.decode(this.props.token);


            return actions.order.create({
                purchase_units: [
                  {
                    description: `Purchase of ${this.props.vehicle['name']}`,
                    amount: {
                      currency_code: "USD",
                      value: this.props.total
                    }
                  }
                ]
              });
        };
        //if we already got user
        return actions.order.create({
            purchase_units: [
              {
                description: `Purchase of ${this.props.vehicle['name']}`,
                amount: {
                  currency_code: "USD",
                  value: this.props.total
                }
              }
            ]
          });
        
    };

    onApprove =  (data,actions) => {
        actions.order.capture().then( async () => {
            

            let order = {
                user:this.props.user['_id'],
                vehicle:this.props.vehicle['_id']
            };
            await this.props.addOrder(order).catch(console.log);

            //here we shall create the order
            return this.setState({showButtons:false,orders_redirect:true})
        })
    }


    render(){
        const {loading,showButtons,paid,redirect,orders_redirect} = this.state;
        return (
            redirect ? (
                <Redirect to={{
                    pathname:'/auth/login',
                    state:{'url':`/showroom/${this.props.vehicle['slug']}`}
                }} />
            ) : (
                orders_redirect ? (
                    <Redirect to="/auth/dashboard/orders" />
                ) : (
                    <section className="paypal-button-payment-section">
                        <div className="paypal-button-payment-section-content"> 
                            {
                                loading ? (
                                    <ScaleLoader width={2} height={15} margin={2} radius={2} color="#009933" />
                                ) : (
                                    <>
                                    {
                                    showButtons && (
                                        <PaypalButton 
                                        createOrder={(data,actions) => this.createOrder(data,actions)}
                                        onApprove={(data,actions) => this.onApprove(data,actions)}
                                        />
                                    )}
                                    {
                                        paid && (
                                            <ScaleLoader width={2} height={15} margin={2} radius={2} color="#009933" />
                                        )
                                    }
                                    </>
                                )
                            }
                        </div>
                    </section> 
                )
                       
        ))
    }
};

PayPalButton.propTypes = {
    currency:Proptypes.string.isRequired,
    total:Proptypes.number.isRequired,
    client:Proptypes.object.isRequired
};

PayPalButton.defaultProps = {
    env:'sandbox',//we dont want anyone to get charged
    onSuccess:(payment) => {
        console.log(`payment succeeded`,payment);
    },
    onCancel:payment => {
        console.log(`payment was cancelled`,payment)
    },
    onError:payment => {
        console.log(`Error loading paypal script`,payment);
    }
};
const mapToProps = state => ({
    user:state.users.user,
    token:state.users.token
});
const dispatchToProps = {
    decode,
    addOrder
};
export default scriptLoader(`https://www.paypal.com/sdk/js?client-id=${client_ID}`)(connect(mapToProps,dispatchToProps)(PayPalButton));