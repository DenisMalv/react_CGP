import { createSlice } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { image, headline, text, overlay } from 'utils/icons';
const AllElements = createSlice({
  name: 'AllElements',
  initialState: {
    ElementsList: [
      {
        id: '1',
        title: 'Img',
        icon: image,
        img: overlay,
      },
      {
        id: '2',
        title: 'Button',
        icon: image,
        text: 'Register now',
      },
      {
        id: '3',
        title: 'Headline',
        icon: headline,
        text: 'A legendary cap set that feels like new',
      },
      {
        id: '4',
        title: 'Paragraph',
        icon: text,
        text: `Prompt your customer to revisit your store by showing them the products they left behind. Consider offering them a coupon code to close the deal.
Using the "Insert" panel on the right, drag and drop 
the Abandoned Cart element onto the page below.`,
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
