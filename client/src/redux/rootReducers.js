import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import wineReducer from './wine/wineReducer';

const rootReducer = combineReducers({
    user: userReducer,
    wine: wineReducer,
});

export default rootReducer;
