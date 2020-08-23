import * as types from './types';

const initial_state = {
    loading:false,
    error:'',
    token:'',
    user:{},
    message:'',
    orders:[]
};

export default (state = initial_state,action) => {
    switch(action.type){

        case types.LOADING:
            return {
                ...state,
                error:'',
                loading:true
            };
        case types.ERROR:
            return {
                ...state,
                loading:false,
                error:action.payload
            };
        case types.TOKEN:
            return {
                ...state,
                loading:false,
                error:'',
                token:action.payload
            };
        case types.USER:
            return {
                ...state,
                loading:false,
                error:'',
                user:action.payload
            };
        case types.MESSAGE:
            return {
                ...state,
                loading:false,
                error:'',
                message:action.payload
            };
        case types.LOGOUT:
            return {
                ...state,
                loading:false,
                error:'',
                token:'',
                message:'',
                user:{},
                orders:[]
            };
        case types.UPDATE_PROFILE:
            return {
                ...state,
                loading:false,
                user:{
                    ...state.user,
                    profile:action.payload
                }
            };
        case types.UPDATE_PROFILE_DETAILS:
            return {
                ...state,
                loading:false,
                user:{
                    ...state.user,
                    ...action.payload
                }
            }
        case types.ORDERS:
            return {
                ...state,
                loading:false,
                orders:action.payload
            }
        case types.ADD_ORDER:
            return {
                ...state,
                loading:false,
                orders:state.orders.push(action.payload)
            }
        default:
            return {
                ...state
            }
    }
}