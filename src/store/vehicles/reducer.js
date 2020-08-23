import * as types from './types';

const initial_state = {
    loading:false,
    vehicles:[],
    vehicle:{}
};

export default (state = initial_state,action) => {
    switch(action.type){

        case types.LOADING:
            return {
                ...state,
                loading:true
            };
        case types.VEHICLES:
            return {
                ...state,
                loading:false,
                vehicles:action.payload
            };
        case types.VEHICLE:
            return {
                ...state,
                loading:false,
                vehicle:action.payload
            }
        default:
            return {
                ...state
            }
    }
};