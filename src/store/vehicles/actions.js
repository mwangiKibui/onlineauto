import * as types from './types';

export const setLoading = () => {
    return {
        type:types.LOADING
    }
};

export const setVehicles = data => {
    return {
        type:types.VEHICLES,
        payload:data
    }
};

export const setVehicle = data => {
    return {
        type:types.VEHICLE,
        payload:data
    }
}