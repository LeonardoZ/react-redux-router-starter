import { DO_LOGIN } from './action_types';

export function doLogin() {
    return {
        "type": DO_LOGIN,
        "payload": {
            isAuthenticated: true
        }
    }
}