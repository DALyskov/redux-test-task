import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import styles from './index.module.css';

import FilmList from '../FilmList';
import {loadFilmsFromApi} from '../../store/films/actions';

function FilmsBord() {
  const films = useSelector(state => state.films.filmsData);
  const filmsIsLoaded = useSelector(state => state.films.statusLoadFilmms);
  const dispatch = useDispatch();

  const loadFilms = useCallback(() => {
      dispatch(loadFilmsFromApi());
  }, [dispatch]);

  useEffect(() => {
    if (!filmsIsLoaded) {
      loadFilms();
    }
  }, [loadFilms, filmsIsLoaded]);

  const favoriteFilms = films.filter((film) => film.inFavorite)

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Фильмы</h1>
      <FilmList
        filmsData={films}
      />
      <FilmList
        filmsData={favoriteFilms}
        isFaviriteList={true}
      />
    </section>
  )
}

export default FilmsBord;
