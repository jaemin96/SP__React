import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './Slice/CounterSlice/CounterSlice';

// store 생성
export const store = configureStore({
    reducer: {
        // reducer 붙이기
        counter: CounterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
