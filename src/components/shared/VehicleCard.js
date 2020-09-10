import React,{useState} from 'react';

//third-party
import {Link} from 'react-router-dom';
import {AiFillCar} from 'react-icons/ai';
import {BsFillPersonFill} from 'react-icons/bs';

//components
import url from '../../utils/url';

const VehicleCard = ({vehicle}) => {

    const [loaded,setLoaded] = useState(false);

    return (
        <div className="vehicle-card">
            <div className="card">
                <div className="vehicle-card-img-section">

                    <Link to={`/showroom/${vehicle['slug']}`}>
                    <div className="vehicle-card-img-preloader" style={{display:loaded ? 'none' : 'block'}} />
                    </Link>
                    
                    <Link to={`/showroom/${vehicle['slug']}`}>
                    <img
                    onLoad={() => setLoaded(true)}
                    style={{display:loaded ? 'block' : 'none'}}
                    className="card-img-top vehicle-card-img"
                    src={`${url}${vehicle['images'][0]}`}
                    alt=""
                    />
                    </Link>
                    

                    <div className="vehicle-card-img-overlay">

                        <div className="vehicle-card-img-overlay-content">

                            <span className="vehicle-card-img-overlay-content-data"><AiFillCar className="vehicle-card-img-overlay-icon" /> {vehicle['fuel']} </span>
                            <span className="vehicle-card-img-overlay-content-data"><BsFillPersonFill className="vehicle-card-img-overlay-icon"/>{vehicle['number_of_seats']}</span>
                            
                        </div>
                        
                    </div>


                </div>
                <div className="card-body">

                    <Link to={`/showroom/${vehicle['slug']}`} className="vehicle-card-name">
                        {vehicle['name']}
                    </Link>
                    <p className="vehicle-card-price">KSHS {parseInt(`${vehicle['price']}`).toLocaleString()}</p>

                </div>
            </div>
        </div>
    )
};

export default VehicleCard;