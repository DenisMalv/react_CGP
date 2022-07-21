import { createSlice } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const AllElements = createSlice({
  name: 'AllElements',
  initialState: {
    ElementsList: [
      {
        id: '1',
        title: 'img',
        icon: 'icon path',
        img: 'image path',
      },
      {
        id: '2',
        title: 'button',
        icon: 'icon path',
        text: 'some text',
      },
      {
        id: '3',
        title: 'headline',
        icon: 'icon path',
        text: 'some text',
      },
      {
        id: '4',
        title: 'paragraph',
        icon: 'icon path',
        text: 'some text',
      },
    ],
  },
  reducers: {
    // filterContact: (state, action) => {
    //   state.AllElements = action.payload.text;
    // },
  },
});

// export const { filterContact } = AllElements.actions;
export const contactsSliceReducer = AllElements.reducer;

//ls
const AllElementsPersistConfig = {
  key: 'AllElements',
  storage,
};
export const persistedAllElementsReducer = persistReducer(
  AllElementsPersistConfig,
  contactsSliceReducer
);
// Selectors
export const getAllElements = state => state.AllElements;
