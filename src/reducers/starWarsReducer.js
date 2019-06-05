import {
  FETCH_CHARACTER,
  FETCH_SUCCESS,
  FETCH_FAIL
} from "../actions";

const initialState = {
  characters: null,
  error: '',
  fetching: false
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTER:
      return {
        ...state,
        error: '',
        fetching: true
      };
      case FETCH_SUCCESS:
        return {
          ...state,
          characters: action.payload,
          error: '',
          fetching: false
        };
        case FETCH_FAIL: 
        return {
          ...state,
          error: action.payload,
          fetching: false
        };
    default:
      return state;
  }
};

export default charsReducer;