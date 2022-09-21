import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

// name, initialState, reducers 필수 항목
export const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // 원하는 action 함수 정의
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

//  action 함수 내보내기
export const { increment, decrement } = CounterSlice.actions;

// slice-reducer 내보내기
export default CounterSlice.reducer;
