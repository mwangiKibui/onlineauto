import React,{useState} from 'react';

//third-party
import {useSelector} from 'react-redux';
import {Search} from '@material-ui/icons';
import {Link} from 'react-router-dom';
//components

const BlockHome = () => {

    const [vehicle,setVehicle] = useState('');
    const {vehicles} = useSelector(state => state.vehicles);
    const [results,setResults] = useState(vehicles);
    const [showResults,setShowResults] = useState(false);

    const handleChange = e => {
        setResults(vehicles.filter(vehicle => vehicle.name.toLowerCase().includes(e.target.value)));
        setVehicle(e.target.value);
    };

    return (
        <section className="block-home" style={{backgroundImage:'url(/images/cover.webp)'}}>
            <div className="block-home-overlay">

                <div className="block-home-content">

                        <form className="block-home-content-form">
                            <div className="input-group">
                                <input type="text"
                                name="vehicle"
                                className="form-control"
                                value={vehicle}
                                onChange={handleChange}
                                placeholder="Search for a vehicle"
                                onKeyPress={ () => setShowResults(true)}
                                onMouseDown={() => setShowResults(true)}
                                onBlur={() => setShowResults(false)}
                                />
                                <div className="input-group-append">
                                    <span className="input-group-text">
                                        <Search />
                                    </span>
                                </div>
                            </div>
                        </form>

                        <div className="block-home-content-results" style={{display:showResults ? 'block' : 'none'}}>
                            {
                                results.length > 0 ? (
                                    <ul className="block-home-search-results">
                                    {
                                        results.map((result,index) => (
                                            <li className="block-home-search-result" key={index}>
                                                <Link className="block-home-search-result-link" to={`/showroom/${result['slug']}`}>
                                                    {result['name']}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                    </ul>
                                ) : (
                                    <p className="text-center mt-2">
                                        No such vehicle found
                                    </p>
                                )
                            }
                            
                        </div>
                    </div>

            </div>
        </section>
    )
};

export default BlockHome;