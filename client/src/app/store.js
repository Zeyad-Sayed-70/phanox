import { configureStore } from '@reduxjs/toolkit';
import adminSlice from '../features/admin/adminSlice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})


export const store = configureStore({
  reducer: {
    product: adminSlice,
  },
  middleware: customizedMiddleware
});
