import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../features/product/productSlice';
import cartSlice from '../features/cart/cartSlice';
import { productsApi } from '../features/api/productsApi';

export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
