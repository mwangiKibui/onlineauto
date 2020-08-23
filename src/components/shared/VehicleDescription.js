import React from 'react';

//third-party
import {useSelector} from 'react-redux';
import {Card,CardContent} from '@material-ui/core';

const VehicleDescription = () => {
    const {vehicle:{description}} = useSelector(state => state.vehicles);
    return (
        <Card className="vehicle-description-card">
            <CardContent>
                <h4 className="vehicle-description-card-heading">Description</h4>
                <h5 className="description-card-description">{description}</h5>
            </CardContent>
        </Card>
    )
};

export default VehicleDescription;