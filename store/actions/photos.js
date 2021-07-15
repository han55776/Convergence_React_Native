import AsyncStorage from '@react-native-async-storage/async-storage';
import { FETCH_DATA, SORTING_IN_RANDOM } from '../constants';
import { shuffle } from '../../helpers/shuffle';

export const fetchData = () => {
  return async (dispatch) => {
    var photos = await AsyncStorage.getItem('data');

    if (!photos) {
      console.log('not cached');

      const response = await fetch(
        'http://jsonplaceholder.typicode.com/photos',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      photos = await response.json();

      await AsyncStorage.setItem('data', JSON.stringify(photos));
    } else {
      console.log('cached');
      photos = JSON.parse(photos);
    }

    dispatch({ type: FETCH_DATA, payload: photos });
  };
};

export const shuffleArray = (array) => {
  return (dispatch) => {
    array = shuffle(array, 0);

    dispatch({ type: SORTING_IN_RANDOM, payload: array });
  };
};
