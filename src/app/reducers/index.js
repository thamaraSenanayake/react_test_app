import counterReducer from './counter';
import IsloggedReducer from './Islogged';
import {combineReducers} from 'redux'


const rootReducer = combineReducers({
    counter:counterReducer,
    Islogged:IsloggedReducer
});

export default rootReducer;