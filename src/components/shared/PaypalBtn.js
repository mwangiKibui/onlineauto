import React from 'react';
//third-party
import propTypes from 'prop-types';
//components
import PaypalExpressBtn from './PaypalExpressCheckout';

export default class PaypalBtn extends React.Component {
    convertTotal = money => {
        let result = money / 10000;
        return result;
    };
    render(){
        const onSuccess = payment => {
            console.log(`your payment succeeded`,payment);
        };
        const onCancel = data => {
            //when user clicks the cancel btn
            console.log('user cancelled the transaction',data);
        };
        const onError = err => {
            //error loading the paypal script
            console.log(`error loading the paypal script`);
        };
        let currency = 'USD';
        let total = parseInt(this.convertTotal(this.props.vehicle['price']));
        let vehicle = this.props.vehicle;
        return (
            <PaypalExpressBtn
            currency={currency}
            total={total}
            vehicle={vehicle}
            onError={onError}
            onSuccess={onSuccess}
            onCancel={onCancel}
            />
        )
    }
}

PaypalBtn.propTypes = {
    total:propTypes.number.isRequired,
    vehicle:propTypes.object.isRequired
}