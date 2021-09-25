import {
    FETCH_DRIVER_REQUEST,
    FETCH_DRIVER_SUCCESS,
    FETCH_DRIVER_FAILURE,
    ADD_DRIVER_REQUEST,
    ADD_DRIVER_SUCCESS,
    ADD_DRIVER_FAILURE,
    UPDATE_DRIVER_REQUEST,
    UPDATE_DRIVER_SUCCESS,
    UPDATE_DRIVER_FAILURE,
    DELETE_DRIVER_REQUEST,
    DELETE_DRIVER_SUCCESS,
    DELETE_DRIVER_FAILURE
} from './driverTypes';

const initialState = {
    drivers: [],
    error: ''
};

const driverReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DRIVER_REQUEST:
            case ADD_DRIVER_REQUEST:
                case UPDATE_DRIVER_REQUEST:
                    case DELETE_DRIVER_REQUEST:
            return {
                ...state
            };
        case FETCH_DRIVER_SUCCESS:
            return {
                drivers: action.payload
            };
        case FETCH_DRIVER_FAILURE:
            case ADD_DRIVER_FAILURE:
                case UPDATE_DRIVER_FAILURE:
                    case DELETE_DRIVER_FAILURE:
            return {
                error: action.payload
            };
        case ADD_DRIVER_SUCCESS:
            return {
                drivers: [...state.drivers, action.payload]
            };
        case UPDATE_DRIVER_SUCCESS:
            const updatedDrivers = state.drivers.filter(driver => driver.id !== action.payload.id);
            return {
                drivers: [...updatedDrivers, action.payload]
            };
        case DELETE_DRIVER_SUCCESS:
                const filteredDrivers = state.drivers.filter(driver => driver.id !== action.payload.id);
                return {
                    drivers: filteredDrivers
                };    
        default:
            return state;
    }
};
export default driverReducer;