import React, { useCallback, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './index.module.css';

import { getFormatedDate } from '../../common';
import { changeFavoriteStatus } from '../../store/films/actions';

function FilmCard(props) {
  const { filmData } = props;
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(false);
  const elmRef = useRef(null);

  const onChangeFavoriteStatus = useCallback(() => {
    setIsDisabled(true);
    dispatch(changeFavoriteStatus(filmData.name))
      .then(() => {
        elmRef.current && setIsDisabled(false);
      });
  }, [dispatch, filmData]);

  const date = getFormatedDate(filmData.date);

  return (
    <div className={styles.container} ref={elmRef}>
      <p>{filmData.name}</p>
      <p>{date}</p>
      <button onClick={onChangeFavoriteStatus} disabled={isDisabled}>
        {!filmData.inFavorite ?
          'Добавить в избранное' :
          'Удалить из избранного'}
      </button>
    </div>
  )
}

FilmCard.propTypes = {
  filmData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    inFavorite: PropTypes.bool.isRequired,
  }).isRequired,
}

export default FilmCard;
