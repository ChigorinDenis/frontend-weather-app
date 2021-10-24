import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  measurement: 'C',
  sidebar: {
    visible: false,
  },
  selectedSearchItem: ''
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    changeMeasurement: (state, { payload }) => {
      return {
        ...state,
        measurement: payload,
      }
    },
    sidebarOpen : (state) => {
      return {
        ...state,
        sidebar: {
          visible: true
        }
      }
    },
    sidebarClose : (state) => {
      return {
        ...state,
        sidebar: {
          visible: false
        }
      }
    },
    selectSearchItem : (state, { payload }) => {
      return {
        ...state,
        selectedSearchItem: payload
      }
    },
  }
});

export const { 
  changeMeasurement,
  sidebarOpen,
  sidebarClose,
  selectSearchItem
} = uiSlice.actions;

export default uiSlice.reducer;