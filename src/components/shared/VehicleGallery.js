import React,{useState} from 'react';

//third-party
import Slider from 'react-slick';
import {useSelector} from 'react-redux';

const VehicleGallery = () => {

    const {vehicle} = useSelector(state => state.vehicles);
    const [loaded,setLoaded] = useState(false);

    let settings = {
        dots:false,
        arrows:false,
        infinite:true,
        speed:500,
        slidesToShow:vehicle['profiles'].length,
        slidesToScroll:vehicle['profiles'].length
    }

    return (
        <section className="vehicle-gallery-section">

        <div className="vehicle-gallery-img-container">
        <div className="vehicle-gallery-img-preloader" style={{display:loaded ? 'none' : 'block'}}/>
        
        <img
        onLoad={() => setLoaded(true)}
        style={{display:loaded ? 'block' : 'none'}}
        src={vehicle['profiles'][0]}
        className="vehicle-gallery-img"
        alt="loading"
        />
          
        
        </div>

        <div className="vehicle-gallery-slideshow">
            <Slider {...settings}>
                {
                    vehicle['profiles'].map((vehicle,index) => (
                        <img 
                        src={vehicle}
                        key={index}
                        className="vehicle-gallery-slideshow-image"
                        alt="Loading..."
                        />
                    ))
                }
            </Slider>
        </div>

        </section>
    )
};

export default VehicleGallery;