import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {decremented, incrementCounterWithSideEffect} from "../../store/counter/actions";
import {loadFilmsFromApi} from "../../store/films/actions";
import styles from './index.module.css';

function Counter() {
  const value = useSelector(state => state.counter.value);
  const films = useSelector(state => state.films.films);
  const dispatch = useDispatch();

  const onIncrement = useCallback(() => {
    dispatch(incrementCounterWithSideEffect());
    dispatch(loadFilmsFromApi());
  }, [dispatch]);
  const onDecrement = useCallback(() => {
    dispatch(decremented());
  }, [dispatch]);

  return (
    <section className={styles.container}>
      <h1>Counter</h1>
      <p>The value is: {value}, {films.length || 0}</p>
      <button onClick={onIncrement}>increment (with 1sec delay)</button>
      <button onClick={onDecrement}>decrement</button>
    </section>
  )

}

export default Counter;
