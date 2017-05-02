import { DO_LOGIN, DO_LOGOUT } from '../actions/action_types';

export default (state = {isAuthenticated: false}, action) => {
    switch (action.type) {
        case DO_LOGIN:
            console.log(state);
            console.log(action);
            return {  ...state, isAuthenticated: action.payload.isAuthenticated };
        case DO_LOGOUT:
            return { ...state, isAuthenticated: action.payload.isAuthenticated };
        default:
            return state;
    }
}