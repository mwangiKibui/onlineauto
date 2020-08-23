
import {combineReducers} from 'redux';

//reducers
import vehicleReducer from './vehicles';
import userReducer from './users';

export default combineReducers({
    vehicles:vehicleReducer,
    users:userReducer
})