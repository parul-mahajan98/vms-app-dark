import {
    FETCH_VEHICLE_REQUEST,
    FETCH_VEHICLE_SUCCESS,
    FETCH_VEHICLE_FAILURE,
    ADD_VEHICLE_REQUEST,
    ADD_VEHICLE_SUCCESS,
    ADD_VEHICLE_FAILURE,
    UPDATE_VEHICLE_REQUEST,
    UPDATE_VEHICLE_SUCCESS,
    UPDATE_VEHICLE_FAILURE,
    DELETE_VEHICLE_REQUEST,
    DELETE_VEHICLE_SUCCESS,
    DELETE_VEHICLE_FAILURE
    
} from './vehicleTypes';

const initialState = {
    vehicles: [],
    error: ''
};

const vehicleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_VEHICLE_REQUEST:
            case ADD_VEHICLE_REQUEST:
                case UPDATE_VEHICLE_REQUEST:
                    case DELETE_VEHICLE_REQUEST:
            return {
                ...state
            };
        case FETCH_VEHICLE_SUCCESS:
            return {
                vehicles: action.payload
            };
        case FETCH_VEHICLE_FAILURE:
            case ADD_VEHICLE_FAILURE:
                case UPDATE_VEHICLE_FAILURE:
                    case DELETE_VEHICLE_FAILURE:
            return {
                error: action.payload
            };
        case ADD_VEHICLE_SUCCESS:
            return {
                vehicles: [...state.vehicles, action.payload]
            };
        case UPDATE_VEHICLE_SUCCESS:
            const updatedVehicles = state.vehicles.filter(vehicle => vehicle.id !== action.payload.id);
            return {
                vehicles: [...updatedVehicles, action.payload]
            };
        case DELETE_VEHICLE_SUCCESS:
                const filteredVehicles = state.vehicles.filter(vehicle => vehicle.id !== action.payload.id);
                return {
                    vehicles: filteredVehicles
                };    
        default:
            return state;
    }
};
export default vehicleReducer;