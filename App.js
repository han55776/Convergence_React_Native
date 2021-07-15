import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import photosReducer from './store/reducers/photos';

import { MainScreen } from './screens/index';

const rootReducer = combineReducers({
  photos: photosReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}
