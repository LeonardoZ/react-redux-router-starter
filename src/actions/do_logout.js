import { DO_LOGOUT } from './action_types';

export function doLogout() {
    return {
        "type": DO_LOGOUT,
        "payload": {
            isAuthenticated: false
        }
    }
}