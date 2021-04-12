import counterSlice from './counter';
import {combineReducers} from "redux";

export default combineReducers({
  counter: counterSlice.reducer,
})
