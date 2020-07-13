import axios from 'axios';
import {
    FETCHING_DATA,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_ERROR,
    FETCH_MORE_DATA_SUCCESS,
    FETCH_MORE_DATA_ERROR,
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
