import React,{useState} from 'react';

//third-party
import {Card,CardContent,CardMedia} from '@material-ui/core';
import {Link} from 'react-router-dom';

const VehicleCard = ({vehicle}) => {

    const [loaded,setLoaded] = useState(false);

    return (
        <div className="vehicle-card">
            <Card className="vehicle-card-root">
                <CardMedia className="vehicle-card-media">
                    <div className="vehicle-card-img-preloader" style={{display:loaded ? 'none' : 'block'}} />
                    <img
                    onLoad={() => setLoaded(true)}
                    style={{display:loaded ? 'block' : 'none'}}
                    className="vehicle-card-img"
                    src={vehicle['profiles'][0]}
                    alt=""
                    />
                </CardMedia>
                <div className="vehicle-card-details">
                    <CardContent className="vehicle-card-content">

                        <Link to={`/showroom/${vehicle['slug']}`} className="vehicle-card-name">
                            {vehicle['name']}
                        </Link>
                        <p className="vehicle-card-price">{parseFloat(`${vehicle['price']}`)} USD</p>

                    </CardContent>
                </div>
            </Card>
        </div>
    )
};

export default VehicleCard;