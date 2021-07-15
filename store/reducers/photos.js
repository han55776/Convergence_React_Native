import { FETCH_DATA, SORTING_IN_RANDOM } from '../constants';

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
        photos: action.payload,
      };
    default:
      return state;
  }
};
