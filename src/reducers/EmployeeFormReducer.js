import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from '../actions/types';
import { Actions } from 'react-native-router-flux';

const INITIAL_STATE = {

    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            // action.payload === { prop: 'name}, value: 'jane'}
            // [action.payload.prop] key interpellation
            // for es5 
            // const newState = {}
            // newState[action.payload.prop] = action.payload.value
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
} 