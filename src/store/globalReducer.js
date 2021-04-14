import { combineReducers } from 'redux';

import filmsSlice from './films';

export default combineReducers({
  films: filmsSlice.reducer,
})
