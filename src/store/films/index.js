import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import {getFilmsList} from "../../pages/api/films";

export const loadFilmsFromApi2 = createAsyncThunk('films/loadFilms', async () => {
  const result = await getFilmsList();
  return result;
})

const updateFilmsData = (newFilm, films) => {
  const filmIndex = films.findIndex((film) => film.name === newFilm.name);
  const newFilms = [].concat(
    ...films.slice(0, filmIndex),
    newFilm,
    ...films.slice(filmIndex + 1, films.length)
  );
  return newFilms;
};

const filmsSlice = createSlice({
  name: 'films',
  initialState: {
    filmsData: [],
    statusLoadFilmms: false,
  },
  reducers: {
    loadFilms: (state, action) =>{
      state.filmsData = action.payload
    },
    changeStatusLoadFilms: (state, action) => {
      state.statusLoadFilmms = action.payload
    },
    updateFilms: (state, action) => {
      state.filmsData = updateFilmsData(action.payload, state.filmsData);
    },
  },
});

export default filmsSlice;
