import { createStore } from "redux";

export const actionTypes = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  INCREASE: "increase",
  TOGGLE: "toggle",
};

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    case actionTypes.DECREMENT:
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
    case actionTypes.INCREASE:
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    case actionTypes.TOGGLE:
      return {
        showCounter: !state.showCounter,
        counter: state.counter,
      };

    default:
      return state;
  }
};

export const store = createStore(counterReducer);
