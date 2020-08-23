import React from 'react';

//third-party
import {Card,CardMedia,CardContent} from '@material-ui/core';
import {Skeleton} from '@material-ui/lab';

const SkeletonVehicleCard = () => {
    return (
        <div className="vehicle-card">
            <Card className="vehicle-card-root">

                <CardMedia className="vehicle-card-media">
                <Skeleton variant="rect" width="100%" height={150} />
                </CardMedia>

                <div className="vehicle-card-details">
                    <CardContent className="vehicle-card-content">
                        
                        <Skeleton />
                        <Skeleton width="60%" />

                    </CardContent>
                </div>

            </Card>
        </div>
    )
};

export default SkeletonVehicleCard;