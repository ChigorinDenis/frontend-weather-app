import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    addLocation: (state, { payload }) => {
      return payload;
    },
  }
});

export const { addLocation } = locationSlice.actions;

export default locationSlice.reducer;