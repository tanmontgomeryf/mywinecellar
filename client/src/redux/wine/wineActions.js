import axios from 'axios';
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

export const fetchWineData = () => async (dispatch) => {
    dispatch({ type: FETCHING_DATA });
    try {
        const response = await axios.get('/api/winelist');
        dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_DATA_ERROR, payload: error });
    }
};

export const fetchMoreWineData = (nextURILink) => async (dispatch) => {
    dispatch({ type: FETCHING_DATA });
    try {
        const response = await axios.post(
            '/api/winelist/pagination',
            { nextURILink },
            { headers: { 'Content-Type': 'application/json' } }
        );
        dispatch({ type: FETCH_MORE_DATA_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_MORE_DATA_ERROR, payload: error });
    }
};

export const filterWineDetails = (obj) => async (dispatch) => {
    dispatch({ type: FILTER_WINE_DETAILS });
    try {
        dispatch({ type: FILTER_WINE_DETAILS_SUCCESS, payload: { ...obj } });
    } catch (error) {
        dispatch({ type: FILTER_WINE_DETAILS_ERROR, payload: error });
    }
};

export const isLanding = (bool) => (dispatch) => {
    dispatch({ type: IS_LANDING, payload: bool });
};
