import React, { useCallback, useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import styles from './index.module.css';

import { changeFavoriteStatus } from '../../store/films/actions';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const formatedDateString = moment(date).format('DD.MM.YYYY');
  return formatedDateString;
};

function FilmCard(props) {
  const { filmData } = props;
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(false);

  const onChangeFavoriteStatus = useCallback(() => {
    setIsDisabled(true);
    dispatch(changeFavoriteStatus(filmData.name))
      .then(() => setIsDisabled(false));
  }, [dispatch, filmData]);

  const date = formatDate(filmData.date);

  return (
    <div className={styles.container}>
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

export default FilmCard;
