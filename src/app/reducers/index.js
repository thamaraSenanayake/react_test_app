import IsloggedReducer from './Islogged';
import {combineReducers} from 'redux'


const rootReducer = combineReducers({
    Islogged:IsloggedReducer
});

export default rootReducer;