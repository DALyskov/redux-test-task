import React from 'react';

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

export default FilmList;
