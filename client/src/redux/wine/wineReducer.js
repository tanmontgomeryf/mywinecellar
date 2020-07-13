import {
    FETCHING_DATA,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_ERROR,
    FETCH_MORE_DATA_SUCCESS,
    FETCH_MORE_DATA_ERROR,
} from '../types';

const initialState = {
    isLoading: true,
    wineData: null,
    error: null,
};

const wineReducer = (state = initialState, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case FETCHING_DATA:
            return {
                ...state,
                isLoading: true,
                wineData: null,
                error: null,
            };
        case FETCH_DATA_SUCCESS:
        case FETCH_MORE_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                wineData: payload,
                error: null,
            };
        case FETCH_DATA_ERROR:
        case FETCH_MORE_DATA_ERROR:
            return {
                ...state,
                isLoading: false,
                wineData: null,
                error: payload,
            };
        default:
            return state;
    }
};

export default wineReducer;
