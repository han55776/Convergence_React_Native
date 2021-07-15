import {
  FETCH_DATA,
  FETCH_DATA_PROCESSING,
  SORTING_IN_RANDOM,
  SORTING_IN_RANDOM_PROCESSING,
} from '../constants';

const initialState = {
  loading: false,
  photos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
    case SORTING_IN_RANDOM:
      return {
        ...state,
        loading: false,
        photos: action.payload,
      };
    case FETCH_DATA_PROCESSING:
    case SORTING_IN_RANDOM_PROCESSING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
