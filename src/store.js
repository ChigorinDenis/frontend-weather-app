import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './reducers/weatherReducer.js';
import locationReducer from './reducers/locationReducer.js';
import uiReducer from './reducers/uiReducer.js';
import searchReducer from './reducers/searchReducer.js'

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    location: locationReducer,
    ui: uiReducer,
    search: searchReducer,
  },
});

export default store;