import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

import FilmCard from '../FilmCard';

function FilmList(props) {
  const { filmsData, isFaviriteList = false } = props;

  return (
    <div className={styles.container}>
      {isFaviriteList ?
        <h2 className={styles.title}>У вас {filmsData.length} фильм(ов) в избранном</h2> :
        <h2 className={styles.title}>Список фильмов</h2>
      }

      {filmsData.map((filmData, index) => (
        <FilmCard
          key={index}
          filmData={filmData}
        />
      ))}
    </div>
  )
}

FilmList.propTypes = {
  filmsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      inFavorite: PropTypes.bool.isRequired,
    })
  ).isRequired,

  isFaviriteList: PropTypes.bool,
}

export default FilmList;
