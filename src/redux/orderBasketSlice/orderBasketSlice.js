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
      const movableProduct = state.userProducts.splice(elemIndex - 1, 1);
      state.userProducts.splice(elemIndex, 0, movableProduct[0]);
      console.log(elemIndex);
    },
    downProduct: (state, action) => {
      const elemIndex = state.userProducts.findIndex(
        el => el.id === action.payload.id
      );
      if (elemIndex >= state.userProducts.length - 1) {
        return;
      }
      const movableProduct = state.userProducts.splice(elemIndex + 1, 1);
      state.userProducts.splice(elemIndex, 0, movableProduct[0]);
      console.log(elemIndex);
    },
    updateProductFromBasket: (state, action) => {
      console.log('action payload', action);
      const index = state.userProducts.findIndex(
        ({ id }) => id === action.payload.id
      );
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
  },
});

export const {
  addProductInBasket,
  deleteProductFromBasket,
  updateProductFromBasket,
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
