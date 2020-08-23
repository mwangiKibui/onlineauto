import React,{Component} from 'react';

//third-party
import {connect} from 'react-redux';
//components
import {fetchOrders} from '../../../../store/users';
import OrderCard from '../../../shared/OrderCard';
import SkeletonOrderCard from '../../../shared/OrderCardSkeleton';
import Error from '../../../shared/Error';

class Orders extends Component {

    state = {
        loading:true,
        orders:[],
        user:this.props.user,
        skeleton_orders:new Array(2).fill()
    };

    async componentDidMount(){
        await this.props.fetchOrders(this.state.user['_id']).catch(console.log);
    };

    componentDidUpdate(prevProps){
        if(this.props.orders !== prevProps.orders){
            this.setState({loading:false,orders:this.props.orders})
        }
    };

    render(){
    const {loading,orders,skeleton_orders} = this.state;
    return (
        <section className="dashboard-orders">
            <div className="row">
                {
                    loading ? (
                        skeleton_orders.map((order,index) => (
                            <div className="col-12 col-sm-12 col-md-12" key={index}>
                                <SkeletonOrderCard order={order} />
                            </div>
                        ))
                    ) : (
                        orders.length === 0 ? (
                            <div className="col-12 col-md-12 col-sm-12">
                                <Error message="You have not made any purchases" />
                            </div>
                        ) : (
                            orders.map((order,index) => (
                                <div className="col-12 col-sm-12 col-md-12" key={index}>
                                    <OrderCard order={order} />
                                </div>
                            ))
                        )
                    )
                }
            </div>
        </section>
    )
}};
const mapToProps = state => ({
    orders:state.users.orders,
    user:state.users.user
});
const dispatchToProps = {
    fetchOrders
}
export default connect(mapToProps,dispatchToProps)(Orders);