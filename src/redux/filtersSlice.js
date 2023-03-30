import { createSlice } from '@reduxjs/toolkit';

export const contactsFiltersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = contactsFiltersSlice.actions;
