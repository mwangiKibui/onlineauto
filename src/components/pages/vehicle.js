import React,{Component} from 'react';
//third-party
import {connect} from 'react-redux';
import {ClipLoader} from 'react-spinners';
//components
import {fetchVehicle,fetchVehicles} from '../../store/vehicles';
import VehicleName from '../shared/VehicleName';
import VehicleGallery from '../shared/VehicleGallery';
import VehicleDescription from '../shared/VehicleDescription';
import VehiclePayment from '../shared/VehiclePayment';
import VehicleCard from '../shared/VehicleCard';
class Vehicle extends Component {
    state = {
        slug:this.props.match.params.slug,
        vehicle:{},
        loading:true,
        related:[]
    };
    async componentDidMount(){
        await this.handleVehicleFetch();
    };
    async componentDidUpdate(prevProps){
        if(this.props.match.params.slug !== prevProps.match.params.slug){
            await this.handleVehicleFetch()
        }
        if(this.props.vehicle !== prevProps.vehicle){
            this.setState({vehicle:this.props.vehicle})
        };
        if(this.props.vehicles !== prevProps.vehicles){
            this.setState({related:this.props.vehicles.filter(vehicle => vehicle.slug !== this.props.match.params.slug)});
        };
    };

    handleVehicleFetch = async () => {
        this.setState({loading:true});
        this.props.fetchVehicles();
        await this.props.fetchVehicle(this.props.match.params.slug)
        .then( () => this.setState({loading:false}));
    };

    render(){
        const {loading,related} = this.state;
        return (
            <section className="vehicle-page">
                <div className="container">
                <div className="row">
                    {
                        loading ? (
                            <div className="col-12 col-md-12 col-sm-12 text-center">
                                <ClipLoader size={35} color="#009933" />
                            </div>
                        ): (
                            <>
                            <div className="col-12 col-sm-8 col-md-8">
                                <VehicleGallery />
                                <VehicleName />
                                <VehicleDescription />
                                <VehiclePayment />
                            </div>

                            <div className="col-12 col-sm-4 col-md-4">
                                <div className="row">

                                <div className="col-12 col-sm-12 col-md-12">
                                    <h4>Other Vehicles</h4>
                                </div>

                                {
                                    related.map((vehicle,index) => (
                                        <div className="col-12 col-sm-12 col-md-12" key={index}>
                                            <VehicleCard vehicle={vehicle} />
                                        </div>
                                    ))
                                }
                                </div>
                            </div>
                            </>
                        )
                    }
                </div>
                </div>
            </section>
        )
    }
};
const mapToProps = state => ({
    vehicle:state.vehicles.vehicle,
    vehicles:state.vehicles.vehicles
});
const dispatchToProps = {
    fetchVehicle,
    fetchVehicles
};
export default connect(mapToProps,dispatchToProps)(Vehicle);