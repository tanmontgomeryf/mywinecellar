import { combineReducers } from 'redux';
import wineReducer from './wine/wineReducer';

const rootReducer = combineReducers({
    wine: wineReducer,
});

export default rootReducer;
