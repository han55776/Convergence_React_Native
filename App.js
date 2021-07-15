import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import photosReducer from './store/reducers/photos';

import { MainScreen } from './screens/index';

// Declare a central state management
const rootReducer = combineReducers({
  photos: photosReducer,
});

// Create a store with Redux and Redux_Thunk for appending more middleware transaction for asynchronous communication
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}
