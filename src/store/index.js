import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./globalReducer";

const store = configureStore({
  reducer: globalReducer,
  devTools: true,
});

export default store;
