import {
    FETCHING_DATA,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_ERROR,
    FETCH_MORE_DATA_SUCCESS,
    FETCH_MORE_DATA_ERROR,
    FILTER_WINE_DETAILS,
    FILTER_WINE_DETAILS_SUCCESS,
    FILTER_WINE_DETAILS_ERROR,
    IS_LANDING,
} from '../types';

const initialState = {
    isLoading: true,
    wineData: null,
    error: null,
    isLanding: false,
};

const wineReducer = (state = initialState, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case FETCHING_DATA:
            return {
                ...state,
                isLoading: true,
                wineData: null,
                wineDetails: null,
                error: null,
            };
        case FETCH_DATA_SUCCESS:
        case FETCH_MORE_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                wineData: payload,
                wineDetails: null,
                error: null,
            };
        case FETCH_DATA_ERROR:
        case FETCH_MORE_DATA_ERROR:
            return {
                ...state,
                isLoading: false,
                wineData: null,
                wineDetails: null,
                error: payload,
            };
        case FILTER_WINE_DETAILS:
            return {
                ...state,
                isLoading: true,
                wineDetails: null,
            };
        case FILTER_WINE_DETAILS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                wineDetails: state.wineData.results.filter(
                    (wineData) =>
                        wineData.wine_id === parseInt(payload.wine_id) &&
                        wineData.vintage === payload.vintage
                )[0],
            };
        case FILTER_WINE_DETAILS_ERROR:
            return {
                ...state,
                isLoading: false,
                wineDetails: null,
            };
        case IS_LANDING:
            return {
                ...state,
                isLanding: payload,
            };
        default:
            return state;
    }
};

export default wineReducer;
