import { createSelector } from 'reselect';
import moment from 'moment';

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const formatedDateString = moment(date).format('DD.MM.YYYY');
  return formatedDateString;
};

export const getFormatedDate = createSelector(dateString => dateString, (dateString) => formatDate(dateString));
