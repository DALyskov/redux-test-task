import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decremented, incrementCounterWithSideEffect} from "../../store/counter/actions";
import styles from './index.module.css';

function Counter() {
  const value = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const onIncrement = useCallback(() => {
    dispatch(incrementCounterWithSideEffect())
  }, [dispatch]);
  const onDecrement = useCallback(() => {
    dispatch(decremented());
  }, [dispatch]);

  return (
    <section className={styles.container}>
      <h1>Counter</h1>
      <p>The value is: {value}</p>
      <button onClick={onIncrement}>increment (with 1sec delay)</button>
      <button onClick={onDecrement}>decrement</button>
    </section>
  )

}

export default Counter;
