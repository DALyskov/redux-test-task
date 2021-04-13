import {combineReducers} from "redux";

import counterSlice from './counter';
import filmsSlice from './films';

export default combineReducers({
  counter: counterSlice.reducer,
  films: filmsSlice.reducer,
})
