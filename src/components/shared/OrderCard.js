import React,{useState} from 'react';

//third-party
import {Card,CardContent,CardMedia} from '@material-ui/core';
import {Info} from '@material-ui/icons';

//components
import url from '../../utils/url'

export default ({order}) => {

    const [loaded,setLoaded] = useState(false);

    return (
        <div className="order-card">
            <Card className="order-card-root">

                <div className="order-card-img-preloader" style={{display:loaded ? 'none' : 'block'}} />

                <CardMedia className="order-card-cover">
                    <img 
                    style={{display:loaded ? 'block' : 'none'}}
                    onLoad={() => setLoaded(true)}
                    src={`${url}${order.vehicle.images[0]}`}
                    className="order-card-img"
                    alt=""
                    />
                </CardMedia>

                <div className="order-card-details">
                    <CardContent>
                        <h4 className="order-card-name">{order['vehicle']['name']}</h4>
                        <p className="text-muted">Purchased on {
                            new Date(order.createdAt).toLocaleDateString()}
                        </p>
                        <p>
                            <Info className="text-success" />{" "}{" "}
                            Fully paid
                        </p>
                        <a href={`${url}${order.invoice}`} className="btn btn-success">
                            view invoice
                        </a>
                    </CardContent>
                </div>

            </Card>
        </div>
    )
}