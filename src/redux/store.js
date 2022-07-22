import { configureStore } from '@reduxjs/toolkit';
import { persistedUserBasketReducer } from './orderBasketSlice/orderBasketSlice';
import { persistedAllElementsReducer } from './allElementsSlice/allElementsSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';

// store
export const store = configureStore({
  reducer: {
    AllElements: persistedAllElementsReducer,
    orderBasket: persistedUserBasketReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
