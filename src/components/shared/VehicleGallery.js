import React,{useState} from 'react';

//third-party
import Slider from 'react-slick';
import {useSelector} from 'react-redux';

//components
import url from '../../utils/url';

const VehicleGallery = () => {

    const {vehicle} = useSelector(state => state.vehicles);
    const [loaded,setLoaded] = useState(false);

    let settings = {
        dots:false,
        arrows:false,
        infinite:true,
        speed:500,
        slidesToShow:vehicle['images'].length,
        slidesToScroll:vehicle['images'].length
    }

    return (
        <section className="vehicle-gallery-section">

        <div className="vehicle-gallery-img-container">
        <div className="vehicle-gallery-img-preloader" style={{display:loaded ? 'none' : 'block'}}/>
        
        <img
        onLoad={() => setLoaded(true)}
        style={{display:loaded ? 'block' : 'none'}}
        src={`${url}${vehicle['images'][0]}`}
        className="vehicle-gallery-img"
        alt="loading"
        />
          
        
        </div>

        <div className="vehicle-gallery-slideshow">
            <Slider {...settings}>
                {
                    vehicle['images'].map((vehicle,index) => (
                        <img 
                        src={`${url}${vehicle}`}
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