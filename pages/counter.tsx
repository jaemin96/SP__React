import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../Redux/Slice/CounterSlice/CounterSlice';
import { RootState } from '../Redux/store';

const Counter = (props: any) => {
    const counter = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();

    console.log('counter', counter);

    return (
        <Fragment>
            <h1>{counter.value}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </Fragment>
    );
};

export default Counter;
