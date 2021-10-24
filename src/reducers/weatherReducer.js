import { createSlice } from '@reduxjs/toolkit';
import { changeMeasurement } from '../reducers/uiReducer.js';
import { exchangeWeatherTemp } from '../utils/utils.js';

const initialState = {
  recievedWeather: [],
  displayedWeather : []
};
 
export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addWeather: (state, { payload }) => {
      const { weather, measurement } = payload
      return {
        ...state,
        recievedWeather: [...weather],
        displayedWeather : exchangeWeatherTemp(weather, measurement)
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(changeMeasurement, (state, { payload }) => {
        const { recievedWeather } = state;
        const displayedWeather = exchangeWeatherTemp(recievedWeather, payload);
        return {
          ...state,
          displayedWeather,
        }
      });
  },
});

export const { addWeather, changeWeatherMeasurement } = weatherSlice.actions;

export default weatherSlice.reducer;