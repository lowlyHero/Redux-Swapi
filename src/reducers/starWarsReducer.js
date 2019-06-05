import {
  FETCH_CHARACTER,
  FETCH_SUCCESS,
  FETCH_FAIL
} from "../actions";

const initialState = {
  characters: null,
  error: '',
  isLoading: false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTER:
      return {
        ...state,
        error: '',
        isLoading: true
      };
      case FETCH_SUCCESS:
        return {
          ...state,
          characters: action.payload,
          error: '',
          isLoading: false
        };
        case FETCH_FAIL: 
        return {
          ...state,
          error: action.payload,
          isLoading: false
        };
    default:
      return state;
  }
};

export default charsReducer;