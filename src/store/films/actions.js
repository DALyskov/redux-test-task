// import { createAsyncThunk } from '@reduxjs/toolkit'

import filmsSlice from "./index";
import {getFilmsList} from "../../pages/api/films";

const {loadFilms, changeStatusLoadFilms, updateFilms} = filmsSlice.actions;

export const loadFilmsFromApi = () => async (dispatch, getState) => {
  const result = await getFilmsList();

  dispatch(loadFilms(result));
  dispatch(changeStatusLoadFilms(true));
}

export const changeFavoriteStatus = (filmName) => async (dispatch, getState) => {
  const films = getState().films.filmsData;
  const result = await new Promise((resolve) => {
    // имитация запроса на сервер
    const oldFilm = films.find((film) => film.name === filmName);
    const newFilm = Object.assign({}, oldFilm, {inFavorite: !oldFilm.inFavorite});
    setTimeout(() => resolve(newFilm), 1000);
  });
  dispatch(updateFilms(result));
  return true;
}
