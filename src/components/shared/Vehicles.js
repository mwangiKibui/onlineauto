import React,{Component} from 'react';

//third-party
import {connect} from 'react-redux';
//components
import {fetchVehicles} from '../../store/vehicles';
import VehicleCard from './VehicleCard';
import SkeletonVehicleCard from './VehicleSkeletonCard';

class Vehicles extends Component{
    state = {
        loading:true,
        vehicles:[],
        skeleton_vehicles:new Array(4).fill()
    };
    async componentDidMount(){
        await this.props.fetchVehicles().then(
            () => this.setState({loading:false})
        ).catch(console.log);
    };
    componentDidUpdate(prevProps){
        if(this.props.vehicles !== prevProps.vehicles){
            this.setState({vehicles:this.props.vehicles})
        }
    };
    render(){
        const {loading,vehicles,skeleton_vehicles} = this.state;
        return(
            <section className="vehicles-section">
                <div className="row">
                    {
                        loading ? (
                            skeleton_vehicles.map((vehicle,index) => (
                                <div className="col-12 col-sm-4 col-md-4" key={index}>
                                    <SkeletonVehicleCard vehicle={vehicle} />
                                </div>
                            ))
                        ) : (
                            vehicles.map((vehicle,index) => (
                                <div className="col-12 col-sm-4 col-md-4" key={index}>
                                    <VehicleCard vehicle={vehicle} />
                                </div>
                            ))
                        )
                    }
                </div>
            </section>
        )
    }
};

const mapToProps = state => ({
    vehicles:state.vehicles.vehicles
});
const dispatchToProps = {
    fetchVehicles
};

export default connect(mapToProps,dispatchToProps)(Vehicles);