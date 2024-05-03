import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import quetionReduser from './slices/quetionSlice'
import categoryReduser from './slices/categorySlice'


const store = configureStore({
  reducer: {
    auth: authReducer,
    quetions: quetionReduser,
    categories: categoryReduser
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



