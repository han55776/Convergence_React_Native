import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FETCH_DATA,
  FETCH_DATA_PROCESSING,
  SORTING_IN_RANDOM,
  SORTING_IN_RANDOM_PROCESSING,
} from '../constants';
import { shuffle } from '../../helpers/shuffle';

// There are two main mechanisms for fetching data; 1. http request from given URL 2. get downloaded data from local storage
export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DATA_PROCESSING });

    // Get stringified data from local storage using AsyncStorage
    var photos = await AsyncStorage.getItem('data');

    // If there is no data in local storage
    if (!photos) {
      console.log('not cached');

      // HTTP GET method to fetch data
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

      // Save the downloaded data for caching purposes
      await AsyncStorage.setItem('data', JSON.stringify(photos));
    } else {
      console.log('cached');

      // Recalls already downloaded data from local storage
      photos = JSON.parse(photos);
    }

    dispatch({ type: FETCH_DATA, payload: photos });
  };
};

export const shuffleArray = (array) => {
  return async (dispatch) => {
    dispatch({ type: SORTING_IN_RANDOM_PROCESSING });

    // Executes recursive function for shuffling data array
    array = shuffle(array, 0);

    // Saves sorted array in local storage
    await AsyncStorage.setItem('data', JSON.stringify(array));

    dispatch({ type: SORTING_IN_RANDOM, payload: array });
  };
};
