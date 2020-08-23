import * as actions from './actions';
import axios from 'axios';

let url,order_url;
if(process.env.NODE_ENV === "production"){
    url = `https://client-jobs.xyz/api/v1/online-auto/user`;
    order_url = `https://client-jobs.xyz/api/v1/online-auto/order`;
}else if(process.env.NODE_ENV === "development"){
    url = `http://localhost:5000/api/v1/online-auto/user`;
    order_url = `http://localhost:5000/api/v1/online-auto/order`;
};

//login 
export const login = data => async dispatch => {
    dispatch(actions.setLoading());

    await axios.post(`${url}/login`,data,{
        headers:{'content-type':'application/json'}
    })

    .then(res => {
        if(!res.data.success) return dispatch(actions.setError(res.data.message));
        return dispatch(actions.setToken(res.data.message));
    })

    .catch(console.log);
};
//signup
export const signup = data => async dispatch => {
    dispatch(actions.setLoading());

    await axios.post(`${url}/signup`,data,{
        headers:{'content-type':'application/json'}
    })

    .then(res => {
        if(!res.data.success) return dispatch(actions.setError(res.data.message));
        return dispatch(actions.setMessage(res.data.message));
    })

    .catch(console.log);
}
//decode
export const decode = token => async dispatch => {
    dispatch(actions.setLoading());

    await axios.get(`${url}/decode`,{
        headers:{'Authorization':`Bearer ${token}`}
    })
    .then(res => dispatch(actions.setUser(res.data.message)))

    .catch(console.log)
};

//logout
export const logout = () => dispatch => {
    dispatch(actions.setLoading());
    return dispatch(actions.setLogout());
};

//updating the profile pic
export const updateProfilePic = (user,pic) => async dispatch => {
    dispatch(actions.setLoading());

    await axios.put(`${url}/update-profile/${user}`,pic,{
        headers:{'content-type':'multipart/form-data'}
    })

    .then(res => dispatch(actions.setUpdateProfilePic(res.data.message)))

    .catch(console.log);
};

//update the profile details
export const updateProfileDetails = (user,data) => async dispatch => {
    dispatch(actions.setLoading());

    await axios.put(`${url}/update-details/${user}`,data,{
        headers:{'content-type':'application/json'}
    })

    .then(() => dispatch(actions.setUpdateProfileDetails(data)))

    .catch(console.log);
};

//fetching the orders
export const fetchOrders = user => async dispatch => {
    dispatch(actions.setLoading());

    await axios.get(`${order_url}/fetch/${user}`)

    .then(res => dispatch(actions.setOrders(res.data.message)))

    .catch(console.log);

};
//adding an order
export const addOrder = data => async dispatch => {
    dispatch(actions.setLoading());

    await axios.post(`${order_url}/add`,data,{
        headers:{'content-type':'application/json'}
    })
    
    .then(() => dispatch(actions.setAddOrder(data)))

    .catch(console.log);
}