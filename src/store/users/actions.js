import * as types from './types';

export const setLoading = () => {
    return {
        type:types.LOADING
    }
};

export const setError = data => ({
    type:types.ERROR,
    payload:data
});

export const setToken = data => ({
    type:types.TOKEN,
    payload:data
});

export const setMessage = data => ({
    type:types.MESSAGE,
    payload:data
});

export const setUser = data => ({
    type:types.USER,
    payload:data
});

export const setLogout = () => ({
    type:types.LOGOUT
});

export const setUpdateProfilePic = data => ({
    type:types.UPDATE_PROFILE,
    payload:data
});

export const setUpdateProfileDetails = data => ({
    type:types.UPDATE_PROFILE_DETAILS,
    payload:data
});

export const setOrders = data => ({
    type:types.ORDERS,
    payload:data
});

export const setAddOrder = data => ({
    type:types.ADD_ORDER,
    payload:data
});