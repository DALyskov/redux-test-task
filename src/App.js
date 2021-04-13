import React from "react";
import './App.css';
import Main from "./pages";
import {Provider} from "react-redux";
import store from "./store";
// import {loadFilmsFromApi2} from "./store/films";
// console.log(store.getState());
// store.dispatch(loadFilmsFromApi2());
// console.log(store.getState());
function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
