import React from 'react';
//third-party
import {Card,CardContent} from '@material-ui/core';
import {useSelector} from 'react-redux';
//components
import PaypalBtn from '../shared/PaypalBtn';

const VehiclePayment = () => {
    const {vehicle} = useSelector(state => state.vehicles)
    return (
        <Card className="vehicle-card-payment">
            <CardContent>
                <p className="vehicle-card-payment-amount">
                    KSHS {parseInt(vehicle['price']).toLocaleString()}
                </p>
                <PaypalBtn vehicle={vehicle} />
            </CardContent>
        </Card>
    )
};

export default VehiclePayment;