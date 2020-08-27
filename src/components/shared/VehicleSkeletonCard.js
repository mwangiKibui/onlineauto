import React from 'react';

//third-party
import {Skeleton} from '@material-ui/lab';

const SkeletonVehicleCard = () => {
    return (
        <div className="vehicle-card">
            <div className="card">

                
                <Skeleton variant="rect" width="100%" height={150} />
                

                <div className="card-body">
                        
                    <Skeleton />
                    <Skeleton width="60%" />

                </div>

            </div>
        </div>
    )
};

export default SkeletonVehicleCard;