import React from 'react';

//third-party
import {Card,CardContent} from '@material-ui/core';
import {useSelector} from 'react-redux';

const VehicleName = () => {
    const {vehicle:{name,category}} = useSelector(state => state.vehicles);

    return (
        <Card className="vehicle-card-name">
            <CardContent>
                <h4 className="vehicle-card-name-vehicle">{name}</h4>
                <h5 className="vehicle-card-name-category">Type: {category}</h5>
            </CardContent>
        </Card>
    )
};

export default VehicleName;