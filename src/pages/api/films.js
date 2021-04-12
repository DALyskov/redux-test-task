const filmsData = [
  {
    name: 'Film 1',
    date: new Date().toISOString(),
    inFavorite: true,
  },
  {
    name: 'Film 2',
    date: new Date().toISOString(),
    inFavorite: false,
  },
  {
    name: 'Film 3',
    date: new Date().toISOString(),
    inFavorite: false,
  },
]

export const getFilmsList = () => new Promise(resolve => {
  setTimeout(() => {
    resolve(filmsData);
  }, 700);
})
