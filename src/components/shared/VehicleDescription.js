import React from 'react';

//third-party
import {useSelector} from 'react-redux';
import {Card,CardContent} from '@material-ui/core';
import {} from '@material-ui/icons';

const VehicleDescription = () => {
    const {vehicle:{engine_size,brand,fuel,number_of_seats}} = useSelector(state => state.vehicles);
    return (
        <Card className="vehicle-description-card">
            <CardContent>
                <h4 className="vehicle-description-card-heading">Description</h4>
                <ul className="vehicle-description-card-properties">
                    
                    <li className="vehicle-description-card-key">
                        Engine size : {engine_size}
                    </li>

                    <li className="vehicle-description-card-key">
                        Brand : {brand}
                    </li>

                    <li className="vehicle-description-card-key">
                        Fuel : {fuel}
                    </li>

                    <li className="vehicle-description-card-key">
                        Number of seats : {number_of_seats}
                    </li>

                </ul>
            </CardContent>
        </Card>
    )
};

export default VehicleDescription;