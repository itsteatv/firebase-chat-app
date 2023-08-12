import { configureStore } from '@reduxjs/toolkit';
import Auth from './Auth';

const store = configureStore({
    reducer: {
        user: Auth,
    },
});

export default store;
