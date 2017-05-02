import { combineReducers } from 'redux';
import FakeAuth from './fake_auth';

const rootReducer = combineReducers({
    fakeAuth: FakeAuth
});

export default rootReducer;