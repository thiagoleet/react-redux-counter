import { useSelector, useDispatch } from "react-redux";
import { actionTypes } from "../store";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch({ type: actionTypes.TOGGLE });
  };

  const incrementHandler = () => {
    dispatch({ type: actionTypes.INCREMENT });
  };

  const decrementHandler = () => {
    dispatch({ type: actionTypes.DECREMENT });
  };

  const increaseHandler = () => {
    dispatch({ type: actionTypes.INCREASE, amount: 5 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {showCounter && (
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={increaseHandler}>Increase by 5</button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
