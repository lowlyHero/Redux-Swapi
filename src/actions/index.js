import axios from 'axios';

export const FETCH_CHARACTER = 'FETCH_CHARACTER';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL'

export const getChars = () => dispatch => {
    dispatch({ type: FETCH_CHARACTER });
    axios
    .get(
        `https://swapi.co/api/people/`
    )
    .then(res => {
        dispatch({
            type: FETCH_SUCCESS,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch({
            type: FETCH_FAIL,
            payload: err
        });
    });
};

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator
