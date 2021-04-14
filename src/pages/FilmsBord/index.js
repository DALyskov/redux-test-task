import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './index.module.css';

import FilmList from '../FilmList';
import { loadFilmsFromApi } from '../../store/films/actions';

const withPropsValidation = (props) => {
  PropTypes.checkPropTypes(propTypes, props, 'prop', '')
  return props
}

function FilmsBord() {
  const { films, filmsIsLoaded } = withPropsValidation(
    useSelector(state => ({
      films: state.films.filmsData,
      filmsIsLoaded: state.films.statusLoadFilmms,
    }))
  );

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

const propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      inFavorite: PropTypes.bool.isRequired,
    })
  ).isRequired,

  filmsIsLoaded: PropTypes.bool.isRequired,
}

export default FilmsBord;
