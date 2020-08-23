import React from 'react';

//third-party
import {Skeleton} from '@material-ui/lab';
import {Card,CardContent,CardMedia} from '@material-ui/core';

const OrderCardSkeleton = () => {

    return (
        <div className="order-card">
            <Card className="order-card-root">

                <CardMedia className="order-card-cover">
                <Skeleton width="100%" height={150} variant="rect" />
                </CardMedia>

                <div className="order-card-details">
                    <CardContent>
                        <Skeleton />
                        <Skeleton width="60%" ></Skeleton>
                        <Skeleton width="40%" />
                    </CardContent>
                </div>

            </Card>
        </div>
    )

};

export default OrderCardSkeleton;