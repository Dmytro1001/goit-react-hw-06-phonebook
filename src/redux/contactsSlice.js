import { createSlice } from '@reduxjs/toolkit';
import data from 'data/data.json';

const contactsInitialState = data;

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

// addContact: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare({ name, numder }) {
//         return {
//           payload: {
//             id: nanoid(),
//             name,
//             numder,
//           },
//         };
//       },
//     },
