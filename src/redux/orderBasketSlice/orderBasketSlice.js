import { createSlice } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const orderBasketSlice = createSlice({
  name: 'orderBasket',
  initialState: {
    userProducts: [],
  },
  reducers: {
    addProductInBasket: (state, action) => {
      console.log(action);
      //------------------------------------------
      const findDuplicateProduct = state.userProducts.find(
        product => product.id === action.payload.id
      );
      if (findDuplicateProduct) {
        return;
      }
      //------------------------------------------
      state.userProducts.push(action.payload);
    },
    deleteProductFromBasket: (state, action) => {
      console.log(action);
      state.userProducts = state.userProducts.filter(
        product => product.id !== action.payload.id
      );
    },
    upProduct: (state, action) => {
      const elemIndex = state.userProducts.findIndex(
        el => el.id === action.payload.id
      );
      if (elemIndex === 0) {
        return;
      }
      console.log(state);
      const a = state.userProducts.splice(elemIndex - 1, 1);
      // console.log('a', a);
      state.userProducts.splice(elemIndex, 0, a[0]);
      console.log(elemIndex);
    },
    downProduct: (state, action) => {
      const elemIndex = state.userProducts.findIndex(
        el => el.id === action.payload.id
      );
      console.log(elemIndex);
      console.log(state.userProducts.length);
      if (elemIndex >= state.userProducts.length - 1) {
        return;
      }
      console.log(state);
      const a = state.userProducts.splice(elemIndex + 1, 1);
      // console.log('a', a);
      state.userProducts.splice(elemIndex, 0, a[0]);
      console.log(elemIndex);
    },
    updateProductFromBasket: (state, action) => {
      console.log('action payload', action);
      const index = state.userProducts.findIndex(
        ({ id }) => id === action.payload.id
      );
      const text = action.payload.text;
      console.log({ index, text });
      // console.log('state.userProducts[index]', state.userProducts[index]);
      if (action.payload.type === 'img') {
        state.userProducts[index] = {
          ...state.userProducts[index],
          img: action.payload.text,
        };
        return;
      }
      state.userProducts[index] = {
        ...state.userProducts[index],
        text: action.payload.text,
      };
    },
    resetProductInBasket: (state, action) => {
      state.userProducts = action.payload;
    },
  },
});

export const {
  addProductInBasket,
  deleteProductFromBasket,
  updateProductFromBasket,
  resetProductInBasket,
  upProduct,
  downProduct,
} = orderBasketSlice.actions;
export const orderBasketSliceReducer = orderBasketSlice.reducer;

//LS
const userBasketPersistConfig = {
  key: 'userBasket',
  storage,
};
export const persistedUserBasketReducer = persistReducer(
  userBasketPersistConfig,
  orderBasketSliceReducer
);
// Selectors
export const getUserProductsInBasket = state => state.orderBasket.userProducts;
