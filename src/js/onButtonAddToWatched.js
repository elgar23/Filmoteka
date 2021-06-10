function onButtonAddToWatched(selectedFilm) {
  const filmsArray = [];
  const currentFilmsWatched = localStorage.getItem('filmsWatched');

  if (currentFilmsWatched) {
    // console.log(
    //   'уже есть массив с сохранёнными фильмами, добавляем объект с новым фильмом',
    // );

    let filmsArray = JSON.parse(currentFilmsWatched);

    // =================
    const buttonAddToWatchedRef = document.querySelector(
      '.modal__watched-button');
    buttonAddToWatchedRef.classList.add('active');
    buttonAddToWatchedRef.textContent = 'IN WATCHED';
     // =================

    if (!filmsArray.find(({ id }) => id === selectedFilm.id)) {
      filmsArray.push(selectedFilm);
      localStorage.setItem('filmsWatched', JSON.stringify(filmsArray));
   
    }
  } else {
    // console.log('массива с сохранёнными фильмами пока нет, создаём');

    filmsArray.push(selectedFilm);
    localStorage.setItem('filmsWatched', JSON.stringify(filmsArray));
  }
}

export default onButtonAddToWatched;
